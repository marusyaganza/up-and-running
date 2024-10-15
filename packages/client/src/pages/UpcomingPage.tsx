import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import dayjs from "dayjs";
import { FlightsTable, FlightsTableProps, Spinner } from "@up/design-system";
import { NotificationContext } from "../context/NotificationContext";
import { FLIGTHS_QUERY } from "../gql/queries";
import { CANCEL_FLIGHT_MUTATION } from "../gql/mutations";
import {
  AddFlightSubscriptionSubscription,
  CancelFlightMutation,
  Flight,
  FlightQuery,
} from "../generated/graphql";
import { FLIGHT_SCHEDULED_SUBSCRIPTION } from "../gql/subscriptions";

const UpcomingPage = () => {
  const [flights, setFlights] = useState<FlightsTableProps["flights"]>([]);
  const { data: subscriptionData, error: subscriptionError } =
    useSubscription<AddFlightSubscriptionSubscription>(
      FLIGHT_SCHEDULED_SUBSCRIPTION
    );

  const { loading, data, error } = useQuery<FlightQuery>(FLIGTHS_QUERY, {
    variables: { filter: { upcoming: true } },
  });
  const { setNotification } = useContext(NotificationContext);

  const formatFlight = (flight: Flight) => {
    const action: () => void = function () {
      cancelFlight({
        variables: { cancelFlightId: flight.id },
        refetchQueries: [
          {
            query: FLIGTHS_QUERY,
            variables: { filter: { upcoming: true } },
          },
          {
            query: FLIGTHS_QUERY,
            variables: { filter: { past: true } },
          },
        ],
      });
    };
    return {
      ...flight,
      date: dayjs(flight.date).format("MM/DD/YYYY"),
      action,
    };
  };

  useEffect(() => {
    if (error) {
      setNotification({
        text: error?.message || "Error. Please try again later",
        variant: "error",
      });
    }
  }, [error]);

  useEffect(() => {
    if (subscriptionError) {
      setNotification({
        text: error?.message || "Subscription Error. Please try again later",
        variant: "error",
      });
    }
  }, [subscriptionError]);

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
    if (subscriptionData) {
      setFlights((prev) => [
        {
          ...formatFlight(subscriptionData.flightScheduled),
          isHighlighted: true,
        },
        ...prev,
      ]);
      const { origin, destination } = subscriptionData.flightScheduled;
      setNotification({
        text: `new flight ${origin}-${destination}!`,
        variant: "success",
      });
    }
  }, [subscriptionData]);

  useEffect(() => {
    const newFlights = data?.flights;
    if (!newFlights) {
      return;
    }
    const flightsData: FlightsTableProps["flights"] =
      newFlights.map(formatFlight);
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
    <>
      <h1>Upcoming flights</h1>
      {isLoading ? <Spinner /> : <FlightsTable flights={flights} withAction />}
    </>
  );
};

export default UpcomingPage;
