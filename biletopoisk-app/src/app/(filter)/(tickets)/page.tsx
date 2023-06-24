import Tickets from "../../../components/tickets/Tickets";
import React from "react";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = ({ searchParams }: Props) => {
  return <Tickets searchParams={searchParams} />;
};

export default Page;
