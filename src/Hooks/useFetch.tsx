import { useEffect, useState } from "react";

export const useFetch = (url: string, options: RequestInit | undefined) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.results) {
          setData(data.results);
          setError(null);
        } else {
          setError("Não foi possível obter os resultados da pesquisa.");
        }
      } catch {
        setError("Erro na pesquisa. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
