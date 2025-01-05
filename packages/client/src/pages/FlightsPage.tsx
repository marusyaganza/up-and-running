import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { FlightForm, Spinner } from "@up/design-system";
import { ROUTES } from "../router/routes";
import { NotificationSetter } from "../context/notification/NotificationContext";
import { useQuery, useMutation } from "@apollo/client";
import { PLATETS_STARSHIPS_QUERY, FLIGTHS_QUERY } from "../gql/queries";
import { NEW_FLIGHT_MUTATION } from "../gql/mutations";
import {
  PlanetsStarshipsQuery,
  NewFlightMutation,
  FlightInput,
} from "../generated/graphql";

const FlightsPage = () => {
  const navigate = useNavigate();
  const setNotification = useContext(NotificationSetter);
  const { loading, data, error } = useQuery<PlanetsStarshipsQuery>(
    PLATETS_STARSHIPS_QUERY
  );
  const [scheduleFlight, flightResult] =
    useMutation<NewFlightMutation>(NEW_FLIGHT_MUTATION);

  useEffect(() => {
    const flightDestination = flightResult?.data?.addNewFlight?.destination;
    if (flightDestination) {
      setNotification({
        text: `flight to ${flightDestination} was created successfully`,
        variant: "success",
      });
      navigate(`/${ROUTES.upcoming}`);
    }
  }, [flightResult?.data]);

  useEffect(() => {
    if (error) {
      setNotification({
        text: error?.message || "Error. Please try again later",
        variant: "error",
      });
    }
  }, [error]);

  useEffect(() => {
    if (flightResult.error) {
      setNotification({
        text: flightResult.error?.message || "Error. Please try again later",
        variant: "error",
      });
    }
  }, [flightResult.error]);

  const handleFormSubmit = (input: FlightInput) => {
    scheduleFlight({ variables: { input }, refetchQueries: [FLIGTHS_QUERY] });
  };

  return (
    <PageLayout>
      <h1>Flights page</h1>
      {loading ? (
        <Spinner />
      ) : (
        <FlightForm
          planets={data?.planets ?? []}
          starships={data?.starships ?? []}
          onSubmit={handleFormSubmit}
        />
      )}
    </PageLayout>
  );
};

export default FlightsPage;
