"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import classes from "./DropDownList.module.scss";
import classNames from "classnames";
import { createPortal } from "react-dom";

interface LinksListProps {
  buttonCaption: string;
  listItems: ReactNode[];
}

const DropDownList = ({ buttonCaption, listItems }: LinksListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        listRef.current &&
        buttonRef.current &&
        !listRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setPosition(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleList = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
    const bounds = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    });
    setWidth(bounds.width);
  };

  const buttonClasses = [classes.button];
  if (isOpen) {
    buttonClasses.push(classes.openButton);
  }

  return (
    <div>
      <button
        className={classNames(buttonClasses)}
        ref={buttonRef}
        onClick={toggleList}
      >
        {buttonCaption}
      </button>
      {isOpen &&
        createPortal(
          <div
            style={{
              top: position?.y,
              left: position?.x,
              position: "fixed",
              width: width,
            }}
          >
            <ul className={classes.listContainer} ref={listRef}>
              {listItems.map((item, index) => (
                <li
                  className={classes.listItem}
                  onClick={() => setIsOpen(!isOpen)}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
};

export default DropDownList;
