"use client";

import React, { useCallback, useState } from "react";
import TextInput from "@/components/UI/text-input/TextInput";
import classes from "./MovieFilter.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    (name: string, value: string) => {
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
    (name: string) => {
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
          onChange={(e) => {
            setFilter({ ...filter, title: e.target.value });

            // TODO: debounce роутинга
            if (e.target.value === "") {
              router.replace(pathname + "?" + clearQueryString("title"));
            } else {
              router.replace(
                pathname + "?" + createQueryString("title", e.target.value)
              );
            }
          }}
        />
        <p>{filter.cinemaId}</p>
        <p>{filter.genre}</p>
      </div>
    </div>
  );
};

export default MovieFilter;
