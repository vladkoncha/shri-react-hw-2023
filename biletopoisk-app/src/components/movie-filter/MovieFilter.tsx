"use client";

import React, { useState } from "react";
import TextInput from "@/components/UI/text-input/TextInput";
import classes from "./MovieFilter.module.scss";

export type Filter = {
  title: string;
  genre: string;
  theatre: string;
};
const MovieFilter = () => {
  const [filter, setFilter] = useState<Filter>({
    title: "",
    genre: "",
    theatre: "",
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
          onChange={(e) => setFilter({ ...filter, title: e.target.value })}
        />
      </div>
    </div>
  );
};

export default MovieFilter;
