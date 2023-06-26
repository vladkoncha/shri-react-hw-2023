"use client";

import Loader from "@/components/UI/loader/Loader";
import React from "react";
import { Movie } from "@/api-types/types";
import { useGetMoviesQuery } from "@/store/services/movieApi";
import { TicketsContext } from "@/components/tickets-provider/TicketsContext";
import { selectInCart, useAppSelector } from "@/store/features/cart/selector";

interface Props {
  children: React.ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const { data, isLoading, error } = useGetMoviesQuery(null);
  const ticketsInCart = useAppSelector((state) => selectInCart(state));

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    throw error || new Error("No data");
  }

  let movies: Movie[] = [...data];

  movies = movies.filter((movie) => ticketsInCart.has(movie.id));

  return (
    <TicketsContext.Provider value={movies}>{children}</TicketsContext.Provider>
  );
};

export default CartProvider;
