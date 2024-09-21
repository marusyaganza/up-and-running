import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { Role } from "../generated/graphql";
import { withSuspense } from "./withSuspense";

export const withAuth = (
  Component: React.LazyExoticComponent<() => JSX.Element>,
  requiredRole: Role[]
) => {
  return (
    <AuthLayout requiredRole={requiredRole}>
      {withSuspense(Component)}
    </AuthLayout>
  );
};
