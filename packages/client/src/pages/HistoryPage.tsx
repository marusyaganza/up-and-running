import { useContext, useEffect } from "react";
import { FlightsTable, Spinner } from "@up/design-system";
import { useQuery } from "@apollo/client";
import { NotificationContext } from "../context/NotificationContext";

import { FLIGTHS_QUERY } from "../gql/queries";
import { FlightQuery } from "../generated/graphql";

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
    <>
      <h1>Flights</h1>
      {loading ? <Spinner /> : <FlightsTable flights={data?.flights || []} />}
    </>
  );
};

export default HistoryPage;
