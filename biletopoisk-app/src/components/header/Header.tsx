"use client";

import Link from "next/link";
import Image from "next/image";
import basket from "../../../public/icons/basket.svg";
import classes from "./Header.module.scss";
import {
  selectAllAmount,
  useAppSelector,
} from "@/store/features/cart/selector";

const Header = () => {
  const ticketsAmount = useAppSelector((state) => selectAllAmount(state));

  return (
    <header className={classes.headerContainer}>
      <h1>
        <Link href="/">Билетопоиск</Link>
      </h1>
      <Link className={classes.basketContainer} href="/">
        {ticketsAmount > 0 && (
          <p className={classes.ticketsAmountText}>{ticketsAmount}</p>
        )}
        <Image alt="basket" src={basket} />
      </Link>
    </header>
  );
};

export default Header;
