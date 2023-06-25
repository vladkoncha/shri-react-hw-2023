import classes from "./DropDownFilter.module.scss";
import React, { useEffect, useState } from "react";
import { genreMap } from "@/api-types/types";
import DropDownList from "@/components/UI/drop-down-list/DropDownList";

interface Props {
  genre?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GenreFilter = ({ onClick, genre }: Props) => {
  const [buttonCaption, setButtonCaption] = useState(genre || "Выберите жанр");
  const [isItemSelected, setIsItemSelected] = useState(Boolean(genre));
  const genreFilters = { all: "Не выбран", ...genreMap };

  useEffect(() => {
    setButtonCaption(genre || "Выберите жанр");
    setIsItemSelected(Boolean(genre));
  }, [genre]);

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
      <DropDownList
        isItemSelected={isItemSelected}
        listItems={listItems}
        buttonCaption={buttonCaption}
      />
    </>
  );
};

export default GenreFilter;
