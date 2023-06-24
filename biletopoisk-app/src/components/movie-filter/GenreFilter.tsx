import classes from "./DropDownFilter.module.scss";
import React from "react";
import { genreMap } from "@/api-types/types";
import DropDownList from "@/components/UI/drop-down-list/DropDownList";

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GenreFilter = ({ onClick }: Props) => {
  const genreFilters = { all: "Не выбран", ...genreMap };

  let listItems: React.ReactNode[] = [];
  for (const [key, value] of Object.entries(genreFilters)) {
    listItems.push(
      <>
        <button className={classes.button} value={key} onClick={onClick}>
          {value}
        </button>
      </>
    );
  }

  return (
    <>
      <DropDownList listItems={listItems} buttonCaption={"Выберите жанр"} />
    </>
  );
};

export default GenreFilter;
