import { useEffect, useState, useContext, useRef } from "react";
import { MovieContext } from "@/context/ContextMovie";

export const useMovieSearch = () => {
  const { search } = useContext(MovieContext);
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);

    const fetchData = async () => {
      const apiKey =
        process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";

      const type = "multi";

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${search}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        if (data.results) {
          setSearchMovie(data.results);
          setError(null);
        } else {
          setError("Não foi possível obter os resultados da pesquisa.");
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          setError("Erro na pesquisa. Tente novamente mais tarde.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controllerRef.current?.abort();
    };
  }, [search]);

  return { searchMovie, loading, error };
};
