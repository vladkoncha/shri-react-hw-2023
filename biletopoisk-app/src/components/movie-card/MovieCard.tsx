"use client";

import classes from "./MovieCard.module.scss";
import React from "react";
import Image from "next/image";
import { useGetMovieByIdQuery } from "@/store/services/movieApi";
import Loader from "@/components/UI/loader/Loader";
import TicketClicker from "@/components/ticket-clicker/TicketClicker";
import { genreMap, Movie } from "@/api-types/types";

interface Props {
  movieId: string;
}

const MovieCard = ({ movieId }: Props) => {
  const { data, isLoading, error } = useGetMovieByIdQuery(movieId);

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No movie data");
  }

  const movie: Movie = data;

  return (
    <div className={classes.movieCardContainer}>
      <div className={classes.movieCardImageContainer}>
        <Image
          alt={`Постер для ${movie.title}`}
          src={movie.posterUrl}
          loading="lazy"
          width={400}
          height={500}
          fill={false}
        />
      </div>

      <div>
        <div className={classes.movieCardTitleClickerContainer}>
          <h1>{movie.title}</h1>
          <TicketClicker movieId={movieId} />
        </div>

        <div className={classes.movieCardInfoContainer}>
          <p>
            <span className={classes.movieCardInfoText}>Жанр: </span>
            {genreMap[movie.genre]}
          </p>
          <p>
            <span className={classes.movieCardInfoText}>Год выпуска: </span>
            {movie.releaseYear}
          </p>
          <p>
            <span className={classes.movieCardInfoText}>Рейтинг: </span>
            {movie.rating}
          </p>
          <p>
            <span className={classes.movieCardInfoText}>Режиссер: </span>
            {movie.director}
          </p>
        </div>

        <div className={classes.movieCardDescriptionContainer}>
          <p className={classes.movieCardInfoText}>Описание</p>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
