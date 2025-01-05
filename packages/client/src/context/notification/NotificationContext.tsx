import { createContext } from "react";
import { INotificationContext } from "../../types/types";

export const NotificationValue = createContext(
  {} as INotificationContext["notification"]
);
export const NotificationSetter = createContext(
  {} as INotificationContext["setNotification"]
);
