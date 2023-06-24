"use client";

import CustomButton, { ButtonClass } from "@/components/UI/button/CustomButton";
import classes from "./(filter)/MainPage.module.scss";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorMessage({ error, reset }: Props) {
  return (
    <div className={classes.errorContainer}>
      <h2>{error.message}</h2>
      <CustomButton onClick={() => reset()} buttonClass={ButtonClass.PRIMARY}>
        Попробуйте снова
      </CustomButton>
    </div>
  );
}
