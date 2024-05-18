import { useState } from "react";

export function useFetch<T>(defaultUrl?: string, defaultOptions?: RequestInit) {
  const [errors, setErrors] = useState<string[]>();
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);

  function sendRequest(url?: string, options?: RequestInit) {
    const fetchUrl = url || defaultUrl;
    if (!fetchUrl) {
      return;
    }
    setIsLoading(true);
    fetch(fetchUrl, { ...defaultOptions, ...options })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data?.errors) {
          setErrors(data.errors);
        } else {
          setData(data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors(err);
      });
  }
  const result: [
    (url?: string, options?: RequestInit) => void,
    { errors?: string[]; isLoading: boolean; data?: T }
  ] = [sendRequest, { errors, data, isLoading }];
  return result;
}
