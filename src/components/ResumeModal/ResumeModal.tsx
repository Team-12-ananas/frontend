import "./ResumeModal.scss";
import ModalWindow from "../Modal/ModalWindow";
import { Button, StyledEngineProvider, Typography } from "@mui/joy";
import dasha from "../../assets/dasha.png";
import BadgeWinner from "../BadgeWinner/BadgeWinner";
import BadgeContestant from "../BadgeContestant/BadgeContestant";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import MyButton from "../../UI/MyButton/MyButton";
import TelegramIcon from "@mui/icons-material/Telegram";

const ResumeModal: React.FC = () => {
  const skills = [
    "Figma, Photoshop, Illustrator, Tilda",
    "CJM, User Stories, JTBD",
    "Прототипирование",
    "Создание UI-kit, дизайн-системы",
    "Работа с референсами и мудбордом",
    "UX исследования",
    "A/B и коридорные тестирования",
    "Гайдлайны Android / IOS",
    "Теория цвета, типографики, композиции",
    "HTML/CSS",
  ];

  const skillsElem = skills.map((item, i) => (
    <li key={i} className="resume__list-item">
      {item}
    </li>
  ));

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
                  <MyButton
                    startDecorator={<TelegramIcon />}
                    variant="outlined"
                    className="resume__btn resume__btn-type-contact"
                  >
                    sweet_bun
                  </MyButton>
                  <MyButton
                    startDecorator={<LocalPhoneOutlinedIcon />}
                    variant="outlined"
                    className="resume__btn resume__btn-type-contact"
                  >
                    +7 954 543-95-54
                  </MyButton>
                  <MyButton
                    startDecorator={<EmailOutlinedIcon />}
                    variant="outlined"
                    className="resume__btn resume__btn-type-contact"
                  >
                    sweetbun@yandex.ru
                  </MyButton>
                </div>
                <Typography level="body-lg" mt="20px" mb="12px" fontWeight="md">
                  Портфолио и резюме
                </Typography>
                <div className="resume__attachments">
                  <Button
                    startDecorator={<BrushOutlinedIcon />}
                    variant="outlined"
                    className="resume__btn resume__btn-type-contact"
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
            <ul className="resume__list">{skillsElem}</ul>
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
            <div className="resume__wrapper_btn">
              <div className="resume__btn-group">
                <MyButton
                  variant="outlined"
                  className="resume__btn resume__btn-type-action"
                >
                  Скачать резюме
                </MyButton>
                <MyButton
                  variant="outlined"
                  className="resume__btn resume__btn-type-action"
                >
                  Перенести в базу
                </MyButton>
              </div>
              <MyButton>Кандидат подходит</MyButton>
            </div>
          </section>
        </article>
      </ModalWindow>
    </StyledEngineProvider>
  );
};

export default ResumeModal;
