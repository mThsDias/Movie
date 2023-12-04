import { useEffect, useState } from "react";
import { useFetch } from "@/Hooks";
import { useParams } from "next/navigation";
import { CastTv } from "../context/types";

export const useCastTv = () => {
  const [castTv, setCastTv] = useState<CastTv[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const apiUrl = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=pt-BR`;
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
          setCastTv(json.cast);
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

  return { castTv, loading, error };
};
