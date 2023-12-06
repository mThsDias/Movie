import { useEffect, useState } from "react";
import { useFetch } from "@/Hooks";
import { Movie } from "../context/types";

export const usePopular = () => {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&api_key=${apiKey}`;
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
          setPopular(json.results);
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

  return { popular, loading, error };
};
