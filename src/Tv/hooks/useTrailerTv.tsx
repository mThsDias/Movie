import { useEffect, useState } from "react";
import { useFetch } from "@/Hooks";
import { useParams } from "next/navigation";
import { TrailerTv } from "../context/types";

export const useTrailerTv = () => {
  const [trailerTv, setTrailerTv] = useState<TrailerTv>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const apiUrl = `https://api.themoviedb.org/3/tv/${id}/season/1/videos?api_key=${apiKey}`;
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
          setTrailerTv(
            json.results.find(
              (trailer: TrailerTv) =>
                trailer.type === "Trailer" && trailer.site === "YouTube"
            )
          );
          console.log(json.results);
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

  return { trailerTv, loading, error };
};
