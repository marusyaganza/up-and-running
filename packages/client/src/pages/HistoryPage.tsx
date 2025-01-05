import { useContext, useEffect } from "react";
import { FlightsTable, Spinner } from "@up/design-system";
import { useQuery } from "@apollo/client";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { NotificationSetter } from "../context/notification/NotificationContext";

import { FLIGTHS_QUERY } from "../gql/queries";
import { FlightQuery } from "../generated/graphql";

const HistoryPage = () => {
  const { loading, data, error } = useQuery<FlightQuery>(FLIGTHS_QUERY, {
    variables: { filter: { past: true } },
  });
  const setNotification = useContext(NotificationSetter);

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
