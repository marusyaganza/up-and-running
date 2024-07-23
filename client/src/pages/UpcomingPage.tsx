import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { FlightsTable, FlightsTableProps } from "../components/FlightsTable";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { Spinner } from "../components/Spinner";
import { NotificationContext } from "../context/NotificationContext";
import { useMutation, useQuery } from "@apollo/client";
import { CancelFlightMutation, FlightQuery } from "../generated/graphql";
import { FLIGTHS_QUERY } from "../gql/queries";
import { CANCEL_FLIGHT_MUTATION } from "../gql/mutations";

const UpcomingPage = () => {
  const [flights, setFlights] = useState<FlightsTableProps["flights"]>([]);
  const { loading, data, error } = useQuery<FlightQuery>(FLIGTHS_QUERY, {
    variables: { filter: { upcoming: true } },
  });
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (error) {
      setNotification({
        text: error?.message || "Error. Please try again later",
        variant: "error",
      });
    }
  }, [error]);

  const [cancelFlight, cancelFlightResult] = useMutation<CancelFlightMutation>(
    CANCEL_FLIGHT_MUTATION
  );

  useEffect(() => {
    if (cancelFlightResult?.data) {
      const { origin, destination } = cancelFlightResult.data.cancelFlight;
      setNotification({
        text: `flight ${origin}-${destination} was cancelled`,
        variant: "success",
      });
    }
  }, [cancelFlightResult?.data]);

  useEffect(() => {
    const newFlights = data?.flights;
    if (!newFlights) {
      return;
    }
    const flightsData: FlightsTableProps["flights"] = newFlights.map(
      (flight) => {
        const action: () => void = function () {
          cancelFlight({
            variables: { cancelFlightId: flight.id },
            refetchQueries: [
              {
                query: FLIGTHS_QUERY,
                variables: { filter: { upcoming: true } },
              },
            ],
          });
        };
        return {
          ...flight,
          date: dayjs(flight.date).format("MM/DD/YYYY"),
          action,
        };
      }
    );
    setFlights(flightsData);
  }, [data?.flights]);

  useEffect(() => {
    const error = cancelFlightResult?.error;
    if (error)
      setNotification({
        text: error?.message || "Something went wrong",
        variant: "error",
      });
  }, [cancelFlightResult?.error]);

  useEffect(() => {
    if (error)
      setNotification({
        text: error?.message || "Something went wrong",
        variant: "error",
      });
  }, [error]);

  const isLoading = loading || cancelFlightResult?.loading;

  return (
    <PageLayout>
      <h1>Upcoming flights</h1>
      {isLoading ? <Spinner /> : <FlightsTable flights={flights} withAction />}
    </PageLayout>
  );
};

export default UpcomingPage;
