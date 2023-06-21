"use client";

import React, { useState } from "react";
import classes from "./Collapsible.module.scss";

interface Props {
  label: string;
  children: React.ReactNode;
}

const Collapsible: React.FunctionComponent<Props> = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.container}>
      <button
        className={open ? classes.openButton : ""}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h2>{label}</h2>
      </button>
      {open && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
