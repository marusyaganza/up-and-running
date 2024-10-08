import { model } from "./models";
import { IContext } from "./types/types";
import { IncomingMessage } from "http";
import { getUserFromToken } from "./auth";

export async function context({
  req,
}: {
  req: IncomingMessage;
}): Promise<IContext> {
  const token = req.headers?.authorization?.split(" ")[1];
  let user;
  if (token) {
    user = getUserFromToken(token);
  }
  return { model, user };
}
