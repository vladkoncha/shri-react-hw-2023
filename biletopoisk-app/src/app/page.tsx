import React from "react";
import MovieFilter from "@/components/movie-filter/MovieFilter";
import classes from "./MainPage.module.scss";
import Tickets from "@/components/tickets/Tickets";

const Page = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.filterContainer}>
        <MovieFilter />
      </div>
      <div className={classes.ticketsContainer}>
        <Tickets />
      </div>
    </div>
  );
};

export default Page;
