"use client";

import React, { useState } from "react";
import MovieFilter, { Filter } from "@/components/movie-filter/MovieFilter";

const Page = () => {
  const [filter, setFilter] = useState<Filter>({
    title: "",
    genre: "",
    theatre: "",
  });

  return (
    <div>
      <MovieFilter filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default Page;
