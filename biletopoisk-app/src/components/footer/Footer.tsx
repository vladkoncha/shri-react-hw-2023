import Link from "next/link";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <Link href="/">Вопросы-ответы</Link>
      <Link href="about">О нас</Link>
    </footer>
  );
};

export default Footer;
