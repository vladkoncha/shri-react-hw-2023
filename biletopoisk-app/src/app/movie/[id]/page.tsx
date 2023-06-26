import classes from "./MoviePage.module.scss";
import React from "react";
import Reviews from "@/components/reviews/Reviews";
import MovieCard from "@/components/movie-card/MovieCard";
import { Metadata, ResolvingMetadata } from "next";
import { BASE_URL } from "@/store/services/movieApi";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const movie = await fetch(`${BASE_URL}movie?movieId=${id}`).then((res) =>
    res.json()
  );

  const homeTitle = (await parent).title?.absolute || "";

  return {
    title: `${homeTitle} | ${movie.title}`,
  };
}

const Page = ({ params }: Props) => {
  return (
    <div className={classes.moviePageContainer}>
      <MovieCard movieId={params.id} />
      <Reviews movieId={params.id} />
    </div>
  );
};

export default Page;
