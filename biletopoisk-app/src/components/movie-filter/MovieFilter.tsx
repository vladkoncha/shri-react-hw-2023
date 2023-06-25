"use client";

import classes from "./MovieFilter.module.scss";
import React, { useCallback, useEffect, useState } from "react";
import TextInput from "@/components/UI/text-input/TextInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GenreFilter from "@/components/movie-filter/GenreFilter";
import CinemaFilter from "@/components/movie-filter/CinemaFilter";
import { genreMap } from "@/api-types/types";

export type Filter = {
  title: string;
  genre: string;
  cinemaId: string;
};
const MovieFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: keyof Filter, value: string) => {
      const params = new URLSearchParams();
      for (const [key, value] of searchParams) {
        params.set(key, value);
      }
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const clearQueryString = useCallback(
    (name: keyof Filter) => {
      const params = new URLSearchParams();
      for (const [key, value] of searchParams) {
        params.set(key, value);
      }
      params.delete(name);

      return params.toString();
    },
    [searchParams]
  );

  const [filter, setFilter] = useState<Filter>({
    title: searchParams.get("title") || "",
    cinemaId: searchParams.get("cinemaId") || "",
    genre: searchParams.get("genre") || "",
  });

  useEffect(() => {
    setFilter({
      title: searchParams.get("title") || "",
      cinemaId: searchParams.get("cinemaId") || "",
      genre: searchParams.get("genre") || "",
    });
  }, [searchParams]);

  const createRoute = (filterName: keyof Filter, value: string): void => {
    if (["all", ""].includes(value)) {
      router.replace(pathname + "?" + clearQueryString(filterName));
    } else {
      router.replace(pathname + "?" + createQueryString(filterName, value));
    }
  };

  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceTimer);

    setDebounceTimer(
      setTimeout(() => {
        createRoute("title", e.target.value);
      }, 500)
    );
  };

  return (
    <div className={classes.filterContainer}>
      <p className={classes.filterName}> Фильтр поиска </p>
      <div className={classes.inputContainer}>
        <label htmlFor="title">Название</label>
        <TextInput
          name="title"
          id="title"
          value={filter.title}
          placeholder="Введите название"
          onChange={handleInputChange}
        />
      </div>

      <div className={classes.inputContainer}>
        <label>Жанр</label>
        <GenreFilter
          genre={
            filter.genre in genreMap
              ? genreMap[filter.genre as keyof typeof genreMap]
              : ""
          }
          onClick={(e) => {
            createRoute("genre", e.currentTarget.value);
          }}
        />
      </div>

      <div className={classes.inputContainer}>
        <label>Кинотеатр</label>
        <CinemaFilter
          cinemaId={filter.cinemaId}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            createRoute("cinemaId", e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
};

export default MovieFilter;
