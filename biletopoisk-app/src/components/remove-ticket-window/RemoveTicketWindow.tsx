"use client";

import classes from "./RemoveTicketWindow.module.scss";
import React from "react";
import CustomButton, { ButtonClass } from "@/components/UI/button/CustomButton";
import { useAppDispatch } from "@/store/features/cart/selector";
import { cartActions } from "@/store/features/cart";

interface Props {
  movieId: string;
  closeModal: () => void;
}

const RemoveTicketWindow = ({ movieId, closeModal }: Props) => {
  const dispatch = useAppDispatch();

  const removeTicket = () => {
    dispatch(cartActions.remove(movieId));
  };

  return (
    <div className={classes.windowContainer}>
      <div className={classes.titleCloseButtonContainer}>
        <h1 className={classes.windowTitleText}>Удаление билета</h1>
        <button onClick={closeModal} className={classes.closeButton} />
      </div>

      <p>Вы уверены, что хотите удалить билет?</p>

      <div className={classes.answerButtonsContainer}>
        <CustomButton onClick={removeTicket} buttonClass={ButtonClass.PRIMARY}>
          Да
        </CustomButton>
        <CustomButton onClick={closeModal} buttonClass={ButtonClass.SECONDARY}>
          Нет
        </CustomButton>
      </div>
    </div>
  );
};

export default RemoveTicketWindow;
