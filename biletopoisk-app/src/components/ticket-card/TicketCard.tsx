import React, { Suspense } from "react";
import classes from "./TicketCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import TicketClicker from "@/components/ticket-clicker/TicketClicker";
import { genreMap, Movie } from "@/api-types/types";
import TicketMovieInfo from "@/components/ticket-card/TicketMovieInfo";

interface Props {
  movie: Movie;
}

const TicketCard = ({ movie }: Props) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <Image
          alt={`Постер для ${movie.title}`}
          src={movie.posterUrl}
          loading="lazy"
          width={450}
          height={300}
          fill={false}
        />
      </div>

      <TicketMovieInfo movie={movie} />
    </div>
  );
};

export default TicketCard;
