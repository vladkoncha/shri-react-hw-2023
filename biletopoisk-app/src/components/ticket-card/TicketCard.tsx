import React from "react";
import classes from "./TicketCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import TicketClicker from "@/components/ticket-clicker/TicketClicker";
import { genreMap, Movie } from "@/api-types/types";

interface Props {
  movie: Movie;
}

const TicketCard = async ({ movie }: Props) => {
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

      <div className={classes.descriptionContainer}>
        <Link href="/">
          <p className={classes.titleText}>{movie.title}</p>
        </Link>
        <p className={classes.genreText}>{genreMap[movie.genre]}</p>
      </div>

      <div className={classes.clickerContainer}>
        <TicketClicker movieId={movie.id} />
      </div>
    </div>
  );
};

export default TicketCard;
