import React from "react";
import classes from "@/components/ticket-card/TicketCard.module.scss";
import Link from "next/link";
import { genreMap, Movie } from "@/api-types/types";
import TicketClicker from "@/components/ticket-clicker/TicketClicker";

const TicketMovieInfo = ({ movie }: { movie: Movie }) => {
  return (
    <>
      <div className={classes.descriptionContainer}>
        <Link href="/">
          <p className={classes.titleText}>{movie.title}</p>
        </Link>
        <p className={classes.genreText}>{genreMap[movie.genre]}</p>
      </div>

      <div className={classes.clickerContainer}>
        <TicketClicker movieId={movie.id} />
      </div>
    </>
  );
};

export default TicketMovieInfo;
