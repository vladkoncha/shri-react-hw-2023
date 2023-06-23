"use client";

import CustomButton, { ButtonClass } from "@/components/UI/button/CustomButton";
import classes from "@/app/MainPage.module.scss";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorMessage({ error, reset }: Props) {
  return (
    <div className={classes.errorContainer}>
      <h2>Что-то пошло не так!</h2>
      <CustomButton onClick={() => reset()} buttonClass={ButtonClass.PRIMARY}>
        Попробуйте снова
      </CustomButton>
    </div>
  );
}
