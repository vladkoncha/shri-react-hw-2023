"use client";

import classes from "./DropDownFilter.module.scss";
import React, { useLayoutEffect, useState } from "react";
import { Cinema } from "@/api-types/types";
import DropDownList from "@/components/UI/drop-down-list/DropDownList";
import { useGetCinemasQuery } from "@/store/services/movieApi";
import Loader from "@/components/UI/loader/Loader";

interface Props {
  cinemaId?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CinemaFilter = ({ onClick, cinemaId }: Props) => {
  const { data, isLoading, error } = useGetCinemasQuery(null);
  const [buttonCaption, setButtonCaption] = useState("Выберите кинотеатр");
  const [isItemSelected, setIsItemSelected] = useState(Boolean(cinemaId));
  const cinemaFilters: { [key: string]: string } = { all: "Не выбран" };

  useLayoutEffect(() => {
    if (cinemaId) {
      setButtonCaption(cinemaFilters?.[cinemaId] || "Выберите кинотеатр");
    } else {
      setButtonCaption("Выберите кинотеатр");
    }
    setIsItemSelected(Boolean(cinemaId));
  }, [cinemaId, cinemaFilters]);

  if (isLoading) {
    return <Loader />;
  }

  if (!data || error) {
    return <p>Кинотеатры не найдены</p>;
  }

  data.forEach((cinema: Cinema) => {
    cinemaFilters[cinema.id] = cinema.name;
  });

  let listItems: React.ReactNode[] = [];
  for (const [key, value] of Object.entries(cinemaFilters)) {
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

export default CinemaFilter;
