"use client";

import React from "react";
import classes from "./TicketClicker.module.scss";
import classNames from "classnames";
import { cartActions, MAX_TICKETS } from "@/store/features/cart";
import {
  selectTicketAmount,
  useAppDispatch,
  useAppSelector,
} from "@/store/features/cart/selector";

interface Props {
  movieId: string;
}

const TicketClicker = ({ movieId }: Props) => {
  const ticketsAmount = useAppSelector((state) =>
    selectTicketAmount(state, movieId)
  );
  const dispatch = useAppDispatch();

  function decrement() {
    if (ticketsAmount > 0) {
      dispatch(cartActions.decrement(movieId));
    }
  }

  function increment() {
    if (ticketsAmount < MAX_TICKETS) {
      dispatch(cartActions.increment(movieId));
    }
  }

  return (
    <div className={classes.clickerContainer}>
      <button
        disabled={ticketsAmount < 1}
        className={classNames(classes.clickerButton, classes.minus)}
        onClick={decrement}
      />
      <p className={classes.amountText}>{ticketsAmount}</p>
      <button
        disabled={ticketsAmount >= MAX_TICKETS}
        className={classNames(classes.clickerButton, classes.plus)}
        onClick={increment}
      />
    </div>
  );
};

export default TicketClicker;
