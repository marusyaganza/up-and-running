import { PropsWithChildren, createContext, useState } from "react";

export interface Notification {
  text: string;
  variant: "success" | "error";
}

export interface Context {
  notification?: Notification;
  setNotification: (val?: Notification) => void;
}

export const NotificationContext = createContext({} as Context);

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [notification, setNotification] = useState<Notification | undefined>();

  const value: Context = { notification, setNotification };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
