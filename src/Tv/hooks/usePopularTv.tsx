import { useEffect, useState } from "react";
import { useFetch } from "@/Hooks";
import { Tv } from "../context/types";

export const usePopularTv = () => {
  const [popularTv, setPopularTv] = useState<Tv[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const apiUrl = `https://api.themoviedb.org/3/discover/tv?&include_video=true&language=pt-BR&page=2&sort_by=popularity.desc&api_key=${apiKey}`;
  const { request } = useFetch(apiUrl, {
    method: "GET",
  });

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const { response, json } = await request(apiUrl, {
          method: "GET",
        });

        if (response?.ok) {
          setPopularTv(json.results);
        } else {
          throw new Error(json.message);
        }
      } catch (error: unknown) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { popularTv, loading, error };
};
