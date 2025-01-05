import { LazyExoticComponent, ReactElement, Suspense } from "react";
import { Spinner } from "@up/design-system";

export const withSuspense = (
  Component: LazyExoticComponent<() => ReactElement>
) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  );
};
