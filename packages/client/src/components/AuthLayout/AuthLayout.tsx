import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Spinner } from "@up/design-system";
import { NotificationContext } from "../../context/NotificationContext";
import { AuthQuery, Role } from "../../generated/graphql";
import { AUTH_QUERY } from "../../gql/queries";

export const AuthLayout = ({
  children,
  requiredRole,
}: PropsWithChildren<{ requiredRole: Role[] }>) => {
  const { setNotification } = useContext(NotificationContext);
  const { loading, data, error } = useQuery<AuthQuery>(AUTH_QUERY, {
    variables: { filter: { past: true } },
    errorPolicy: "ignore",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    const role = data?.user?.role;

    if (!role || !requiredRole.includes(role)) {
      setNotification({
        variant: "error",
        text: `Please login as ${requiredRole.join(" or ")} to continue`,
      });
      navigate("/");
    }
  }, [requiredRole, data, loading]);

  useEffect(() => {
    if (error) {
      setNotification({
        text: error?.message || "Authentication Error. Please try again later",
        variant: "error",
      });
    }
  }, [error]);

  return loading ? <Spinner /> : children;
};
