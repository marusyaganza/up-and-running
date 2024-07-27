import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { Header, Snackbar } from "@up/design-system";
import { NotificationContext } from "../../context/NotificationContext";
import styles from "./PageLayout.module.css";
import { ROUTES } from "../../router/routes";

const pages = [
  { text: "Flights", url: ROUTES.flights },
  { text: "Upcoming", url: ROUTES.upcoming },
  { text: "History", url: ROUTES.history },
];
export interface PageLayoutProps {}

export const PageLayout = ({
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  const { notification, setNotification } = useContext(NotificationContext);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (notification) {
      setShowNotification(true);
    }
  }, [notification]);

  const handleClose = () => {
    setNotification(undefined);
    setShowNotification(false);
  };

  return (
    <>
      <div>
        <Header routes={pages} />
        <main className={styles.page}>{children}</main>
        <Snackbar
          onClose={handleClose}
          open={showNotification}
          message={notification?.text}
          variant={notification?.variant}
        />
      </div>
    </>
  );
};
