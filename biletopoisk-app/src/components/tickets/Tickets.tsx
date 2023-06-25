"use client";

import TicketCard from "@/components/ticket-card/TicketCard";
import React, { useContext } from "react";
import { Movie } from "@/api-types/types";
import { TicketsContext } from "@/components/tickets-provider/TicketsContext";

interface Props {
  addRemovers?: boolean;
}

const Tickets = ({ addRemovers }: Props) => {
  const tickets = useContext(TicketsContext);

  if (!tickets.length) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Нет билетов</h2>
      </div>
    );
  }

  return (
    <div className={"ticketsContainer"}>
      {tickets.map((movie: Movie) => (
        <TicketCard movie={movie} key={movie.id} addRemovers={addRemovers} />
      ))}
    </div>
  );
};

export default Tickets;
