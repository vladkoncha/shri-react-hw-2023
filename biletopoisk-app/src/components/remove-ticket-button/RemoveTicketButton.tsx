"use client";

import classes from "./RemoveTicketButton.module.scss";
import React from "react";

const RemoveTicketButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <button onClick={onClick} className={classes.removeTicketButton} />
    </>
  );
};

export default RemoveTicketButton;
