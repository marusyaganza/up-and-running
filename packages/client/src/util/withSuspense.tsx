import { Suspense } from "react";
import { Spinner } from "@up/design-system";
import { PageLayout } from "../components/PageLayout/PageLayout";

export const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Suspense fallback={<Spinner />}>
      <PageLayout>
        <Component />
      </PageLayout>
    </Suspense>
  );
};
