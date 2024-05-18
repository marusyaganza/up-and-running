import { Suspense } from "react";
import { Spinner } from "../components/Spinner";

export const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  );
};
