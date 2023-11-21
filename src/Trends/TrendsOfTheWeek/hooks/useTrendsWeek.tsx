import { useEffect, useState } from "react";
import { useFetch } from "@/Hooks";

export const useTrendsWeek = () => {
  const [trendsWeek, setTrendsWeek] = useState([]);
  const [loadingTrendsWeek, setLoadingTrendsWeek] = useState(false);
  const [errorTrendsWeek, setErrorTrendsWeek] = useState<string | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";

  const apiUrlWeek = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=pt-BR`;

  const { request } = useFetch(apiUrlWeek, {
    method: "GET",
  });

  useEffect(() => {
    setLoadingTrendsWeek(true);

    const fetchData = async () => {
      try {
        const { response, json } = await request(apiUrlWeek, {
          method: "GET",
        });

        if (response?.ok) {
          setTrendsWeek(json.results);
        } else {
          throw new Error(json.message);
        }
      } catch (error: unknown) {
        setErrorTrendsWeek(error as string);
      } finally {
        setLoadingTrendsWeek(false);
      }
    };

    fetchData();
  }, []);

  return { trendsWeek, loadingTrendsWeek, errorTrendsWeek };
};
