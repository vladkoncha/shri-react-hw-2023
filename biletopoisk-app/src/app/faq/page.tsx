import React from "react";
import classes from "./Faq.module.scss";
import Collapsible from "@/components/UI/collapsible/Collapsible";

const Label = (text: string) => {
  return <h2>{text}</h2>;
};

const Page = () => {
  return (
    <div className={classes.container}>
      <h1>Вопросы-ответы</h1>
      <Collapsible label={Label("Что такое Билетопоиск?")}>
        <p>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </p>
      </Collapsible>
      <Collapsible label={Label("Какой компании принадлежит Билетопоиск?")}>
        <p>
          Начиная с 15 октября 2013 года сервис принадлежит компании «Яндекс».
        </p>
      </Collapsible>
      <Collapsible label={Label("Как купить билет на Билетопоиск?")}>
        <p>А никак.</p>
      </Collapsible>
      <Collapsible label={Label("Как оставить отзыв на Билетопоиск?")}>
        <p>А никак.</p>
      </Collapsible>
    </div>
  );
};

export default Page;
