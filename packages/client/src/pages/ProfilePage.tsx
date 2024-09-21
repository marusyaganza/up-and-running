import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../gql/queries";
import { UserQuery } from "../generated/graphql";
import { useContext, useEffect } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { Spinner } from "@up/design-system";

const ProfilePage = () => {
  const { loading, data, error } = useQuery<UserQuery>(USER_QUERY, {
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
      {loading && <Spinner />}
      {data?.user && (
        <>
          <h1>
            Welcome, {`${data?.user?.firstName} ${data?.user?.lastName}!`}
          </h1>
          <p>{`Enjoy opportunities available for ${data?.user?.role?.toLocaleLowerCase() || "you"}`}</p>
        </>
      )}
    </>
  );
};

export default ProfilePage;
