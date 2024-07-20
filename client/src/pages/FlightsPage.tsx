import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { FlightForm } from "../components/FlightForm";
import { Spinner } from "../components/Spinner";
import { useFetch } from "../hooks/useFetch";
import { IFlight } from "../types";
import { ROUTES } from "../router/routes";
import { NotificationContext } from "../context/NotificationContext";

const API_URL = import.meta.env.VITE_API_URL;

const FlightsPage = () => {
  const { setNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const [fetchPlanets, planetsResult] = useFetch<string[]>(
    `${API_URL}/planets`
  );
  const [fetchStarships, starshipsResult] = useFetch<string[]>(
    `${API_URL}/starships`
  );

  const [scheduleFlight, flightResult] = useFetch<IFlight>();

  useEffect(() => {
    fetchPlanets();
    fetchStarships();
  }, []);

  useEffect(() => {
    if (flightResult?.data?.destination) {
      setNotification({
        text: `flight to ${flightResult.data.destination} was created successfully`,
        variant: "success",
      });
      navigate(`/${ROUTES.upcoming}`);
    }
  }, [flightResult?.data]);

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
    notifyError(flightResult?.errors);
  }, [flightResult?.errors]);

  useEffect(() => {
    notifyError(planetsResult?.errors);
  }, [planetsResult?.errors]);

  useEffect(() => {
    notifyError(starshipsResult?.errors);
  }, [starshipsResult?.errors]);

  const handleFormSubmit = (values: Record<string, string>) => {
    scheduleFlight(`${API_URL}/flights`, {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const isLoading =
    planetsResult?.isLoading ||
    starshipsResult?.isLoading ||
    flightResult?.isLoading;

  return (
    <PageLayout>
      <h1>Flights page</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlightForm
          planets={planetsResult?.data || []}
          starships={starshipsResult?.data || []}
          onSubmit={handleFormSubmit}
        />
      )}
    </PageLayout>
  );
};

export default FlightsPage;
