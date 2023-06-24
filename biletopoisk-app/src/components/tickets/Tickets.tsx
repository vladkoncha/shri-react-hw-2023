"use client";

import React from "react";
import classes from "./Tickets.module.scss";
import { Movie } from "@/api-types/types";
import {
  useGetMovieByCinemaIdQuery,
  useGetMoviesQuery,
} from "@/store/services/movieApi";
import TicketCard from "@/components/ticket-card/TicketCard";
import Loader from "@/components/UI/loader/Loader";
import { Filter } from "@/components/movie-filter/MovieFilter";

interface Props {
  inCart?: boolean;
  searchParams?: SearchParams;
}

export interface SearchParams {
  title?: string;
  genre?: string;
  cinemaId?: string;
}

const Tickets = ({ searchParams, inCart = false }: Props) => {
  const { data, isLoading, error } = searchParams?.cinemaId
    ? useGetMovieByCinemaIdQuery(searchParams.cinemaId)
    : useGetMoviesQuery(null);

  const filter = searchParams as Filter;

  let movies: Movie[];

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No data");
  }

  if (filter.title) {
    movies = data.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase())
    );
  } else {
    movies = [...data];
  }

  return (
    <div className={classes.ticketsContainer}>
      {movies.map((movie: Movie) => (
        <TicketCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Tickets;
