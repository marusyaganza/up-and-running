import {
  IAutenticatedContext,
  IPlanetData,
  IStarshipData,
  ITokenData,
} from "./types";

export function isStarshipData(data: any): data is IStarshipData {
  const isValid =
    typeof data.passengers === "string" &&
    typeof data.model === "string" &&
    typeof data.name === "string";
  return isValid;
}

export function isPlanetData(data: any): data is IPlanetData {
  return typeof data?.name === "string";
}

export function assertIsTypedArray<T>(
  data: any,
  validator: (arg: any) => arg is T
): asserts data is T[] {
  if (!Array.isArray(data)) {
    throw new Error(`not an array, ${JSON.stringify(data)}`);
  }
  if (data.some((item) => !validator(item))) {
    throw new Error("Data is invalid");
  }
}

export function isAutenticatedContext(data: any): data is IAutenticatedContext {
  const user = data?.user;
  if (!user) {
    return false;
  }
  return "id" in user;
}

export function isITokenData(data: any): data is ITokenData {
  return "id" in data;
}
