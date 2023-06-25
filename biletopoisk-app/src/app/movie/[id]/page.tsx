import React from "react";
import Reviews from "@/components/reviews/Reviews";

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  return (
    <div>
      <Reviews movieId={params.id} />
    </div>
  );
};

export default Page;
