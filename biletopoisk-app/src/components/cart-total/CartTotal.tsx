"use client";

import classes from "./CartTotal.module.scss";
import React from "react";
import {
  selectAllAmount,
  useAppSelector,
} from "@/store/features/cart/selector";

const CartTotal = () => {
  const ticketsAmount = useAppSelector((state) => selectAllAmount(state));

  if (!ticketsAmount) {
    return;
  }

  return (
    <div className={classes.cartTotalContainer}>
      <p className={classes.cartTotalText}>Итого билетов:</p>
      <p className={classes.cartTotalText}>{ticketsAmount}</p>
    </div>
  );
};

export default CartTotal;
