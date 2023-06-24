import classes from "./DropDownFilter.module.scss";
import React, { useEffect, useState } from "react";
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
  const cinemaFilters: { [key: string]: string } = { all: "Не выбран" };

  useEffect(() => {
    if (cinemaId) {
      setButtonCaption(cinemaFilters[cinemaId] || "Выберите кинотеатр");
    }
  }, [cinemaFilters]);

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
        isItemSelectedInit={Boolean(cinemaId)}
        listItems={listItems}
        buttonCaption={buttonCaption}
      />
    </>
  );
};

export default CinemaFilter;
