import "../../styles/globals.scss";
import React from "react";
import classes from "./MainPage.module.scss";
import MovieFilter from "@/components/movie-filter/MovieFilter";

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.filterContainer}>
        <MovieFilter />
      </div>
      <div className={classes.ticketsContainer}>{children}</div>
    </div>
  );
}
