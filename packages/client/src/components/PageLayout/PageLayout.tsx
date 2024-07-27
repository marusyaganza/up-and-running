import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { Header } from "../Header";
import { Snackbar } from "../Snackbar";
import { NotificationContext } from "../../context/NotificationContext";
import styles from "./PageLayout.module.css";

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
        <Header />
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
