import { FlightsTable } from "../components/FlightsTable";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { Spinner } from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { FlightQuery } from "../generated/graphql";
import { FLIGTHS_QUERY } from "../gql/queries";
import { useContext, useEffect } from "react";
import { NotificationContext } from "../context/NotificationContext";

const HistoryPage = () => {
  const { loading, data, error } = useQuery<FlightQuery>(FLIGTHS_QUERY, {
    variables: { filter: { past: true } },
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

  return (
    <PageLayout>
      <h1>Flights</h1>
      {loading ? <Spinner /> : <FlightsTable flights={data?.flights || []} />}
    </PageLayout>
  );
};

export default HistoryPage;
