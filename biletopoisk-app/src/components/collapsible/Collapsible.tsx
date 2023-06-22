"use client";

import React, { useState } from "react";
import classes from "./Collapsible.module.scss";

interface Props {
  label: React.ReactNode;
  children: React.ReactNode;
}

const Collapsible = ({ label, children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.container}>
      <button
        className={open ? classes.openButton : ""}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {label}
      </button>
      {open && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
