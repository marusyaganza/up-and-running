export interface INotificationContext {
  notification?: INotification;
  setNotification: (val?: INotification) => void;
}

export interface INotification {
  text: string;
  variant: "success" | "error";
}
