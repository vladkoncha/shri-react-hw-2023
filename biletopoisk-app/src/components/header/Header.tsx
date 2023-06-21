import Link from "next/link";
import Image from "next/image";
import basket from "../../../public/icons/basket.svg";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <h1>
        <Link href="/">Билетопоиск</Link>
      </h1>
      <Image alt="basket" src={basket} />
    </header>
  );
};

export default Header;
