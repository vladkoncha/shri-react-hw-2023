import React from "react";
import classes from "./Tickets.module.scss";
import TicketCard from "@/components/ticket-card/TicketCard";
import { Movie } from "@/api-types/types";

async function getMovies(): Promise<Movie[]> {
  const res = await fetch(`http://127.0.0.1:3001/api/movies`);
  return res.json();
}

const Tickets = async () => {
  const movies = await getMovies();

  return (
    <div className={classes.ticketsContainer}>
      {movies.map((movie) => (
        <TicketCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Tickets;
