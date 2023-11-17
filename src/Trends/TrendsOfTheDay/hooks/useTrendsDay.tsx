import { useEffect, useState, useRef } from "react";
import { useFetch } from "@/Hooks";

export const useTrendsDay = () => {
  const [trendsDay, setTrendsDay] = useState([]);
  const [loadingTrendsDay, setLoadingTrendsDay] = useState(false);
  const [errorTrendsDay, setErrorTrendsDay] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";

  const apiUrlDay = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=pt-BR`;

  const {
    data: dataDay,
    loading: fetchLoadingDay,
    error: fetchErrorDay,
  } = useFetch(apiUrlDay, undefined);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    if (dataDay) {
      setTrendsDay(dataDay);
      setLoadingTrendsDay(fetchLoadingDay);
      setErrorTrendsDay(fetchErrorDay);
    } else if (fetchErrorDay) {
      setLoadingTrendsDay(false);
      setErrorTrendsDay(fetchErrorDay);
    }

    return () => {
      controllerRef.current?.abort();
    };
  }, [dataDay, fetchErrorDay]);

  return { trendsDay, errorTrendsDay, loadingTrendsDay };
};
