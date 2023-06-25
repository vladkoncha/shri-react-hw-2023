import Tickets from "../../../components/tickets/Tickets";
import React from "react";
import TicketsProvider from "@/components/tickets-provider/TicketsProvider";

const Page = () => {
  return (
    <TicketsProvider>
      <Tickets />
    </TicketsProvider>
  );
};

export default Page;
