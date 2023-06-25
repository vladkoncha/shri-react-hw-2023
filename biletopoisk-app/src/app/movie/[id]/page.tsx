import React from "react";
import Reviews from "@/components/reviews/Reviews";
import MovieCard from "@/components/movie-card/MovieCard";

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  return (
    <div>
      <MovieCard movieId={params.id} />
      <Reviews movieId={params.id} />
    </div>
  );
};

export default Page;
