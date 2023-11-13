import React, { ReactNode, createContext } from "react";
import { useMovieSearch } from "../hook/useMovieSearch";

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextValue {
  searchMovie: SearchMovie[];
  loading: boolean;
  error: string | null;
}

interface SearchMovie {
  id: number;
  poster_path: string;
  title: string;
  name: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  media_type: string;
}

export const SearchContext = createContext({} as SearchContextValue);

export function SearchProvider({ children }: SearchProviderProps) {
  const { searchMovie, loading, error } = useMovieSearch();

  return (
    <SearchContext.Provider value={{ searchMovie, loading, error }}>
      {children}
    </SearchContext.Provider>
  );
}
