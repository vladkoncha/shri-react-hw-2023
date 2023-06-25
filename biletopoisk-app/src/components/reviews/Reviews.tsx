"use client";

import Loader from "@/components/UI/loader/Loader";
import React from "react";
import { Review } from "@/api-types/types";
import { useGetReviewsByMovieIdQuery } from "@/store/services/movieApi";
import ReviewCard from "@/components/review-card/ReviewCard";

interface Props {
  movieId: string;
}

const Reviews = ({ movieId }: Props) => {
  const { data, isLoading, error } = useGetReviewsByMovieIdQuery(movieId);

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No data");
  }

  let reviews: Review[] = [...data];
  reviews = reviews.filter(
    (item, index, self) => index === self.findIndex((i) => i.id === item.id)
  );

  return (
    <div className={"ticketsContainer"}>
      {reviews.map((review: Review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </div>
  );
};

export default Reviews;
