import React from "react";
import Link from "next/link";
import { genreMap, Movie } from "@/api-types/types";
import TicketClicker from "@/components/ticket-clicker/TicketClicker";

const TicketMovieInfo = ({
  movie,
  addRemover,
}: {
  movie: Movie;
  addRemover?: boolean;
}) => {
  return (
    <>
      <div className={"descriptionContainer"}>
        <Link href={`/movie/${movie.id}`}>
          <p className={"titleText"}>{movie.title}</p>
        </Link>
        <p className={"genreText"}>{genreMap[movie.genre]}</p>
      </div>

      <div className={"ticketCardClickerContainer"}>
        <TicketClicker addRemover={addRemover} movieId={movie.id} />
      </div>
    </>
  );
};

export default TicketMovieInfo;
