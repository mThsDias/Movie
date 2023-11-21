import { useEffect, useState } from "react";
import { useFetch } from "@/Hooks";

export const useTrendsDay = () => {
  const [trendsDay, setTrendsDay] = useState([]);
  const [loadingTrendsDay, setLoadingTrendsDay] = useState(false);
  const [errorTrendsDay, setErrorTrendsDay] = useState<string | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const apiUrlDay = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

  const { loading, request } = useFetch(apiUrlDay, {
    method: "GET",
  });

  useEffect(() => {
    setLoadingTrendsDay(loading);

    const fetchData = async () => {
      try {
        const { response, json } = await request(apiUrlDay, {
          method: "GET",
        });

        if (response?.ok) {
          setTrendsDay(json.results);
        } else {
          throw new Error(json.message);
        }
      } catch (error: unknown) {
        setErrorTrendsDay(error as string);
      } finally {
        setLoadingTrendsDay(false);
      }
    };

    fetchData();
  }, []);

  return { trendsDay, errorTrendsDay, loadingTrendsDay };
};
