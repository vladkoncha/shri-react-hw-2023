import React from "react";
import Tickets from "@/components/tickets/Tickets";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = ({ searchParams }: Props) => {
  return <Tickets />;
};

export default Page;
