import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "http://localhost:3001/api/";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "movies",
    }),
    getMovieById: builder.query({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
    getMovieByCinemaId: builder.query({
      query: (movieId) => `movies?cinemaId=${movieId}`,
    }),
    getCinemas: builder.query({
      query: () => `cinemas`,
    }),
    getReviewsByMovieId: builder.query({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetMovieByCinemaIdQuery,
  useGetCinemasQuery,
  useGetReviewsByMovieIdQuery,
} = movieApi;
