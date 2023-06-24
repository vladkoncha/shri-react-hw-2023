import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
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
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetMovieByCinemaIdQuery,
} = movieApi;
