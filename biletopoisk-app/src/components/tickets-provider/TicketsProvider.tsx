"use client";

import Loader from "@/components/UI/loader/Loader";
import React from "react";
import { Movie } from "@/api-types/types";
import {
  useGetMovieByCinemaIdQuery,
  useGetMoviesQuery,
} from "@/store/services/movieApi";
import { Filter } from "@/components/movie-filter/MovieFilter";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { TicketsContext } from "@/components/tickets-provider/TicketsContext";

interface Props {
  children: React.ReactNode;
  cinemaId?: string | null;
}

const filterMovies = (
  searchParams: ReadonlyURLSearchParams,
  movies: Movie[]
): Movie[] => {
  const filter: Filter = {
    title: searchParams.get("title") || "",
    cinemaId: searchParams.get("cinemaId") || "",
    genre: searchParams.get("genre") || "",
  };

  if (filter.title) {
    movies = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase())
    );
  }
  if (filter.genre) {
    movies = movies.filter(
      (movie: Movie) => movie.genre.toLowerCase() === filter.genre.toLowerCase()
    );
  }

  return movies;
};

const MovieByCinemaIdComponent = ({ children, cinemaId }: Props) => {
  const searchParams = useSearchParams()!;
  const { data, isLoading, error } = useGetMovieByCinemaIdQuery(cinemaId);

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No movies data");
  }

  let movies: Movie[] = [...data];
  movies = filterMovies(searchParams, movies);

  return (
    <TicketsContext.Provider value={movies}>{children}</TicketsContext.Provider>
  );
};

const MoviesComponent = ({ children }: Props) => {
  const searchParams = useSearchParams()!;
  const { data, isLoading, error } = useGetMoviesQuery(null);

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No movies data");
  }

  let movies: Movie[] = [...data];
  movies = filterMovies(searchParams, movies);

  return (
    <TicketsContext.Provider value={movies}>{children}</TicketsContext.Provider>
  );
};

const TicketsProvider = ({ children }: Props) => {
  const searchParams = useSearchParams()!;

  return searchParams.get("cinemaId") ? (
    <MovieByCinemaIdComponent cinemaId={searchParams.get("cinemaId")}>
      {children}
    </MovieByCinemaIdComponent>
  ) : (
    <MoviesComponent>{children}</MoviesComponent>
  );
};

export default TicketsProvider;
