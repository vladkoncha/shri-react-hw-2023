"use client";

import React, { useState } from "react";
import classes from "./TicketClicker.module.scss";
import classNames from "classnames";

const MAX_TICKETS = 30;

const TicketClicker = () => {
  const [amount, setAmount] = useState(0);

  function decrement() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  function increment() {
    if (amount < MAX_TICKETS) {
      setAmount(amount + 1);
    }
  }

  return (
    <div className={classes.clickerContainer}>
      <button
        disabled={amount < 1}
        className={classNames(classes.clickerButton, classes.minus)}
        onClick={decrement}
      />
      <p className={classes.amountText}>{amount}</p>
      <button
        disabled={amount >= MAX_TICKETS}
        className={classNames(classes.clickerButton, classes.plus)}
        onClick={increment}
      />
    </div>
  );
};

export default TicketClicker;
