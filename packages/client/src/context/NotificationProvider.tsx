import { PropsWithChildren, useState } from "react";
import { INotification, INotificationContext } from "../types/types";
import { NotificationContext } from "./NotificationContext";

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [notification, setNotification] = useState<INotification | undefined>();

  const value: INotificationContext = { notification, setNotification };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
