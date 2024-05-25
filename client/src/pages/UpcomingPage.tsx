import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { FlightsTable } from "../components/FlightsTable";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { Spinner } from "../components/Spinner";
import { useFetch } from "../hooks/useFetch";
import { NotificationContext } from "../context/NotificationContext";
import { Flight } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

const UpcomingPage = () => {
  const [fetchFlights, flightsResult] = useFetch<Flight[]>(
    `${API_URL}/flights/upcoming`
  );
  const [flights, setFlights] = useState<Flight[]>([]);
  const [cancelFlight, cancelFlightResult] = useFetch<Flight>();
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    fetchFlights();
  }, []);

  useEffect(() => {
    if (cancelFlightResult?.data) {
      const { origin, destination } = cancelFlightResult.data;
      fetchFlights();
      setNotification({
        text: `flight ${origin}-${destination} was cancelled`,
        variant: "success",
      });
    }
  }, [cancelFlightResult?.data]);

  useEffect(() => {
    if (!flightsResult?.data?.length) {
      return;
    }
    const flightsData = flightsResult.data.map((flight) => {
      const action: () => void = function () {
        cancelFlight(`${API_URL}/flights/${flight._id}`, { method: "delete" });
      };
      return {
        ...flight,
        date: dayjs(flight.date).format("MM/DD/YYYY"),
        action,
      };
    });
    setFlights(flightsData);
  }, [flightsResult?.data]);

  const notifyError = (errors?: string[]) => {
    if (!errors?.length) {
      return;
    }
    setNotification({
      text: errors.join(" "),
      variant: "error",
    });
  };

  useEffect(() => {
    notifyError(cancelFlightResult?.errors);
  }, [cancelFlightResult?.errors]);

  useEffect(() => {
    notifyError(flightsResult?.errors);
  }, [flightsResult?.errors]);

  const isLoading = flightsResult?.isLoading || cancelFlightResult?.isLoading;

  return (
    <PageLayout>
      <h1>Upcoming flights</h1>
      {isLoading ? <Spinner /> : <FlightsTable flights={flights} withAction />}
    </PageLayout>
  );
};

export default UpcomingPage;
