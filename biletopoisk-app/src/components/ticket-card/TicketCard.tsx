"use client";

import React from "react";
import Image from "next/image";
import { Movie } from "@/api-types/types";
import TicketMovieInfo from "@/components/ticket-card/TicketMovieInfo";

interface Props {
  movie: Movie;
}

const TicketCard = ({ movie }: Props) => {
  return (
    <div className={"cardContainer"}>
      <div className={"imageContainer"}>
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
