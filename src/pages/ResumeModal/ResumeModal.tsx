// import React from "react";
import "./ResumeModal.scss";
import ModalWindow from "../../components/Modal/ModalWindow";
import { Button, StyledEngineProvider, Typography } from "@mui/joy";
import dasha from "../../assets/dasha.png";
import BadgeWinner from "../../components/BadgeWinner/BadgeWinner";
import BadgeContestant from "../../components/BadgeContestant/BadgeContestant";
import Telegram from "../../UI/Icons/Telegram/Telegram";
import Behance from "../../UI/Icons/Behance/Behance";
import Email from "../../UI/Icons/Email/Email";
import Phone from "../../UI/Icons/Phone/Phone";

const skills = [
  "Figma, Photoshop, Illustrator, Tilda",
  "CJM, User Stories, JTBD",
  "Прототипирование",
  "Создание UI-kit, дизайн-системы",
  "Работа с референсами и мудбордом",
  "UX исследования",
  "A/B и коридорные тестирования",
  "Гайдлайны Android / IOS",
  "Теория цвета, типографики, композиции",
  "HTML/CSS",
];

/**
 * !!!!!!!!!!!!!!!!
 * Пока кнопка открытия попапа находится в самом компоненте модалки.
 * что бы его открыть, запихни <ResumeModal/> в любое видимое место
 *
 */

const ResumeModal = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ModalWindow>
        <article className="resume">
          <section className="resume__section">
            <div className="resume__header">
              <div className="resume__header resume__header_left">
                <img src={dasha} alt="фото кандидата" />
                {/* тут альт динамически заменить на
                //* data.resume.name */}
                <div className="resume__badges">
                  <BadgeWinner />
                  <BadgeContestant />
                </div>
              </div>
              <div className="resume__header resume__header_right">
                <Typography level="h1" mb="8px">
                  Дарья Иванова
                </Typography>
                <Typography
                  level="h2"
                  mb="20px"
                  className="resume__text_accent"
                >
                  Дизайнер интерфейсов
                </Typography>
                <Typography level="title-md" mb="12px">
                  Москва • Гибридный график • Готов к переезду
                </Typography>
                <Typography level="title-md" mb="32px" fontWeight="md">
                  Опыт работы — 1 год
                </Typography>
                <Typography level="body-lg" mb="12px" fontWeight="md">
                  Контакты
                </Typography>
                <div className="resume__contacts">
                  <Button
                    startDecorator={<Telegram />}
                    variant="outlined"
                    className="btn__outlined"
                  >
                    sweet_bun
                  </Button>
                  <Button
                    startDecorator={<Phone />}
                    variant="outlined"
                    className="btn__outlined"
                  >
                    +7 954 543-95-54
                  </Button>
                  <Button
                    startDecorator={<Email />}
                    variant="outlined"
                    className="btn__outlined"
                  >
                    sweetbun@yandex.ru
                  </Button>
                </div>
                <Typography level="body-lg" mt="20px" mb="12px" fontWeight="md">
                  Портфолио и резюме
                </Typography>
                <div className="resume__attachments">
                  <Button
                    startDecorator={<Behance />}
                    variant="outlined"
                    className="btn__outlined"
                  >
                    Behance
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="resume__section">
            <div className="resume__title">
              <Typography level="h2">Опыт работы — 1 год</Typography>
            </div>
            <div className="resume__wrapper">
              <Typography level="h3" fontWeight="md">
                Дизайнер интерфейсов (обучение)
              </Typography>
              <div className="resume__wrapper resume__wrapper_accent">
                <Typography
                  level="title-md"
                  className="resume__text resume__text_accent"
                >
                  Октябрь 2022 — Июль 2023
                </Typography>
                <Typography
                  level="title-md"
                  className="resume__text resume__text_accent"
                >
                  Яндекс Практикум
                </Typography>
              </div>
            </div>
            {/* ================================================================ */}
            {/* TODO(zang3tsu88):
                По логике это блок "обазанности" на прошлой работе. Вероятно это
                стоит заменить на какой-то один p.resume__responsibilities
                потому что с бэка будет приходить один кусок данных, а не много разных,
                которые будем индивидуально стилизовать. */}
            <Typography level="title-md" fontWeight="md" mt="32px">
              Проекты
            </Typography>
            <Typography level="body-lg" fontWeight="md" mt="20px" mb="12px">
              Мобильное приложение для онлайн школы Praktika School (ссылка на
              кейс)
            </Typography>
            <Typography level="body-lg">
              <ul className="resume__list">
                <li className="resume__list-item">
                  Спроектировал дизайн приложения на базе Android
                </li>
                <li className="resume__list-item">
                  Создал подробный UI-kit и интерактивный прототип
                </li>
              </ul>
            </Typography>
            {/* ================================================================ */}
          </section>
          <section className="resume__section">
            <div className="resume__title">
              <Typography level="h2">Навыки</Typography>
            </div>
            <ul className="resume__list">
              {skills.map((skill) => (
                <li className="resume__list-item">{skill}</li>
              ))}
            </ul>
          </section>
          <section className="resume__section">
            <div className="resume__title">
              <Typography level="h2">Образование</Typography>
            </div>
            <div className="resume__wrapper">
              <Typography level="h3" fontWeight="md">
                Экономист-менеджер
              </Typography>
              <div className="resume__wrapper resume__wrapper_accent">
                <Typography
                  level="title-md"
                  className="resume__text resume__text_accent"
                >
                  2014 (5 лет)
                </Typography>
                <Typography
                  level="title-md"
                  className="resume__text resume__text_accent"
                >
                  МАТИ имени К.Э. Циолковского
                </Typography>
              </div>
            </div>
          </section>
          <section className="resume__section">
            <div className="resume__title">
              <Typography level="h2">Обо мне</Typography>
            </div>
            <Typography level="body-lg">
              Хочу быть частью продуктовой команды, работать над сложными и
              интересными задачами, проводить исследования, проектировать
              интерфейсы, решать проблемы пользователей на благо бизнеса.
            </Typography>
          </section>
          <section className="resume__section">
            {/*
            // TODO(zang3tsu88): ДОДЕЛАТЬ КНОПКИ.
            // Может стоит вывести наружу из <article> и дать mt: 80px
             */}
            <div className="resume__btn-group" aria-label="button group">
              <Button variant="outlined">Скачать резюме</Button>
              <Button variant="outlined">Перенести в базу</Button>
              <Button sx={{ marginLeft: "auto", backgroundColor: "#5A9BFF" }}>
                Кандидат подходит
              </Button>
            </div>
          </section>
        </article>
      </ModalWindow>
    </StyledEngineProvider>
  );
};

export default ResumeModal;
