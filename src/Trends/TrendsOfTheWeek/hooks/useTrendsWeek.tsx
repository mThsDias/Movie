import { useEffect, useState, useRef } from "react";
import { useFetch } from "@/Hooks";

export const useTrendsWeek = () => {
  const [trendsWeek, setTrendsWeek] = useState([]);
  const [loadingTrendsWeek, setLoadingTrendsWeek] = useState(false);
  const [errorTrendsWeek, setErrorTrendsWeek] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";

  const apiUrlWeek = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=pt-BR`;

  const {
    data: dataWeek,
    loading: fetchLoadingWeek,
    error: fetchErrorWeek,
  } = useFetch(apiUrlWeek, undefined);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    if (dataWeek) {
      setTrendsWeek(dataWeek);
      setLoadingTrendsWeek(fetchLoadingWeek);
      setErrorTrendsWeek(fetchErrorWeek);
    } else if (fetchErrorWeek) {
      setLoadingTrendsWeek(false);
      setErrorTrendsWeek(fetchErrorWeek);
    }

    return () => {
      controllerRef.current?.abort();
    };
  }, [dataWeek, fetchErrorWeek]);

  return { trendsWeek, loadingTrendsWeek, errorTrendsWeek };
};
