import classes from "./ModalWrapper.module.scss";
import React, { ReactNode } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  visible: boolean;
  setVisible: Function;
}

const ModalWrapper = ({ children, visible, setVisible }: ModalProps) => {
  const rootClasses = [classes.modal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return createPortal(
    <div className={classNames(rootClasses)} onClick={() => setVisible(false)}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalWrapper;
