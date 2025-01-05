import { PropsWithChildren, useState } from "react";
import { INotification } from "../../types/types";
import { NotificationValue, NotificationSetter } from "./NotificationContext";

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [notification, setNotification] = useState<INotification | undefined>();

  return (
    <NotificationSetter.Provider value={setNotification}>
      <NotificationValue.Provider value={notification}>
        {children}
      </NotificationValue.Provider>
    </NotificationSetter.Provider>
  );
};
