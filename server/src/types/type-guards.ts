import { IPlanetData, IStarshipData } from "./types";

export function isStarshipData(data: any): data is IStarshipData {
  return (
    typeof data.passengers === "number" &&
    typeof data.model === "string" &&
    typeof data.name === "string"
  );
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
