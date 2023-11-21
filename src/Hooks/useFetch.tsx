import { useCallback, useState } from "react";

export const useFetch = (url: string, options: RequestInit | undefined) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (url: string, options: RequestInit | undefined) => {
      let response;
      let json;

      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (error: unknown) {
        json = null;
        setError(error as string);
      } finally {
        setData(json);
        setLoading(false);
      }

      return { response, json };
    },
    [url, options]
  );

  return { data, loading, error, request };
};
