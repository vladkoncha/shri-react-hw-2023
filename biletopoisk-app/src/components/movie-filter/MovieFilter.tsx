import React from "react";
import TextInput from "@/components/text-input/TextInput";
import classes from "./MovieFilter.module.scss";

export type Filter = {
  title: string;
  genre: string;
  theatre: string;
};

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const MovieFilter = ({ filter, setFilter }: Props) => {
  return (
    <div className={classes.filterContainer}>
      <p className={classes.filterName}> Фильтр поиска </p>
      <div className={classes.inputContainer}>
        <label htmlFor="title">Название</label>
        <TextInput
          value={filter.title}
          placeholder="Введите название"
          onChange={(e) => setFilter({ ...filter, title: e.target.value })}
        />
      </div>
    </div>
  );
};

export default MovieFilter;
