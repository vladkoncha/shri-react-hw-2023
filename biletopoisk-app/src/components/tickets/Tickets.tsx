"use client";

import TicketCard from "@/components/ticket-card/TicketCard";
import Loader from "@/components/UI/loader/Loader";
import React from "react";
import { Movie } from "@/api-types/types";
import {
  useGetMovieByCinemaIdQuery,
  useGetMoviesQuery,
} from "@/store/services/movieApi";
import { Filter } from "@/components/movie-filter/MovieFilter";
import { useSearchParams } from "next/navigation";

interface Props {
  inCart?: boolean;
}

const Tickets = ({ inCart = false }: Props) => {
  const searchParams = useSearchParams()!;

  const { data, isLoading, error } = searchParams.get("cinemaId")
    ? useGetMovieByCinemaIdQuery(searchParams.get("cinemaId"))
    : useGetMoviesQuery(null);

  const filter: Filter = {
    title: searchParams.get("title") || "",
    cinemaId: searchParams.get("cinemaId") || "",
    genre: searchParams.get("genre") || "",
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No data");
  }

  let movies: Movie[] = [...data];
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

  return (
    <div className={"ticketsContainer"}>
      {movies.map((movie: Movie) => (
        <TicketCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Tickets;
