"use client";

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorMessage({ error, reset }: Props) {
  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <button onClick={() => reset()}>Попробуйте снова</button>
    </div>
  );
}
