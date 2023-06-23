"use client";

import React from "react";
import classes from "./Tickets.module.scss";
import { Movie } from "@/api-types/types";
import { useGetMoviesQuery } from "@/store/services/movieApi";
import TicketCard from "@/components/ticket-card/TicketCard";
import Loader from "@/components/UI/loader/Loader";

interface Props {
  inCart?: boolean;
}

const Tickets = ({ inCart = false }: Props) => {
  const { data, isLoading, error } = useGetMoviesQuery(null);

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No data");
  }

  return (
    <div className={classes.ticketsContainer}>
      {data.map((movie: Movie) => (
        <TicketCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Tickets;
