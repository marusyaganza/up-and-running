import { useEffect } from "react";
import { FlightsTable } from "../components/FlightsTable";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { Spinner } from "../components/Spinner";
import { IFlight } from "../types";
import { useFetch } from "../hooks/useFetch";

const API_URL = import.meta.env.VITE_API_URL;

const HistoryPage = () => {
  const [fetchFlights, flightsResult] = useFetch<IFlight[]>(
    `${API_URL}/flights/history`
  );

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <PageLayout>
      <h1>Flights</h1>
      {flightsResult?.isLoading ? (
        <Spinner />
      ) : (
        <FlightsTable flights={flightsResult?.data || []} />
      )}
    </PageLayout>
  );
};

export default HistoryPage;
