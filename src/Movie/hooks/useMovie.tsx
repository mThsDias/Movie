import { useEffect, useState, useRef } from "react";
import { useFetch } from "@/Hooks";

export const useMovie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR`;

  const {
    data,
    loading: FetchLoading,
    error: FetchError,
  } = useFetch(apiUrl, undefined);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    if (data) {
      setMovie(data);
      setLoading(FetchLoading);
      setError(FetchError);
    } else if (FetchError) {
      setLoading(false);
      setError(FetchError);
    }

    return () => {
      controllerRef.current?.abort();
    };
  }, [data, FetchError]);

  return { movie, loading, error };
};
