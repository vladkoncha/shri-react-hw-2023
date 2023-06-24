import classes from "./DropDownFilter.module.scss";
import React, { useState } from "react";
import { genreMap } from "@/api-types/types";
import DropDownList from "@/components/UI/drop-down-list/DropDownList";

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GenreFilter = ({ onClick }: Props) => {
  const [buttonCaption, setButtonCaption] = useState("Выберите жанр");
  const genreFilters = { all: "Не выбран", ...genreMap };

  let listItems: React.ReactNode[] = [];
  for (const [key, value] of Object.entries(genreFilters)) {
    listItems.push(
      <>
        <button
          className={classes.button}
          value={key}
          onClick={(e) => {
            setButtonCaption(value);
            onClick(e);
          }}
        >
          {value}
        </button>
      </>
    );
  }

  return (
    <>
      <DropDownList listItems={listItems} buttonCaption={buttonCaption} />
    </>
  );
};

export default GenreFilter;
