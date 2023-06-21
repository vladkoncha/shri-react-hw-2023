import React from "react";
import classes from "./Faq.module.scss";
import Collapsible from "@/components/collapsible/Collapsible";

const Page = () => {
  return (
    <div className={classes.container}>
      <h1>Вопросы-ответы</h1>
      <Collapsible label="Что такое Билетопоиск?">
        <p>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </p>
      </Collapsible>
      <Collapsible label="Какой компании принадлежит Билетопоиск?">
        <p>
          Начиная с 15 октября 2013 года сервис принадлежит компании «Яндекс».
        </p>
      </Collapsible>
      <Collapsible label="Как купить билет на Билетопоиск?">
        <p>А никак.</p>
      </Collapsible>
      <Collapsible label="Как оставить отзыв на Билетопоиск?">
        <p>А никак.</p>
      </Collapsible>
    </div>
  );
};

export default Page;
