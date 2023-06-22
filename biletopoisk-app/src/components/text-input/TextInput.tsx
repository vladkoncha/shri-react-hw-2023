import React, { forwardRef, Ref, InputHTMLAttributes } from "react";
import classes from "./TextInput.module.scss";

const CustomTextInput = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <input {...props} type="text" ref={ref} className={classes.textInput} />
      </>
    );
  }
);

export default CustomTextInput;
