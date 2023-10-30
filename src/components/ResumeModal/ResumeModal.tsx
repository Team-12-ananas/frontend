import "./ResumeModal.scss";
import ModalWindow from "../Modal/ModalWindow";
import { Button, StyledEngineProvider, Typography } from "@mui/joy";
import BadgeWinner from "../BadgeWinner/BadgeWinner";
import BadgeContestant from "../BadgeContestant/BadgeContestant";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MyButton from "../../UI/MyButton/MyButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IStudent, getStudentById } from "../../mockapi/api-students";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useLocation } from "react-router-dom";

const ResumeModal: React.FC = () => {
  const [student, setStudent] = useState<IStudent | null>(null);
  const { currentIdResume } = useAppSelector((state) => state.modal);
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      if (!currentIdResume) {
        setStudent(null);
        return;
      }
      const data = await getStudentById(currentIdResume);
      if (data) setStudent(data);
    }
    getData();
  }, [currentIdResume]);

  if (student)
    return (
      <StyledEngineProvider injectFirst>
        <ModalWindow>
          <article className="resume">
            <section className="resume__section">
              <div className="resume__header">
                <div className="resume__header resume__header_left">
                  <img
                    src={student.avatar}
                    alt="фото кандидата"
                    className="resume__avatar"
                  />
                  <div className="resume__badges">
                    <BadgeWinner />
                    <BadgeContestant />
                  </div>
                </div>
                <div className="resume__header resume__header_right">
                  <Typography level="h1" mb="8px">
                    {student.name}
                  </Typography>
                  <Typography
                    level="h2"
                    mb="20px"
                    className="resume__text_accent"
                  >
                    {student.specialty}
                  </Typography>
                  <Typography level="title-md" mb="12px">
                    {student.city} •{" "}
                    {student.employmentType.map((item, i) => {
                      return <span key={i}>{item}</span>;
                    })}{" "}
                    •{" "}
                    {student.readyToRelocate
                      ? "Готов к переезду"
                      : "Не готов к переезду"}
                  </Typography>
                  <Typography level="title-md" mb="32px" fontWeight="md">
                    Опыт работы — {student.jobExpirience}
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
                      {student.telegram}
                    </MyButton>
                    <MyButton
                      startDecorator={<LocalPhoneOutlinedIcon />}
                      variant="outlined"
                      className="resume__btn resume__btn-type-contact"
                    >
                      {student.phone}
                    </MyButton>
                    <MyButton
                      startDecorator={<EmailOutlinedIcon />}
                      variant="outlined"
                      className="resume__btn resume__btn-type-contact"
                    >
                      {student.email}
                    </MyButton>
                  </div>
                  <Typography
                    level="body-lg"
                    mt="20px"
                    mb="12px"
                    fontWeight="md"
                  >
                    Портфолио
                  </Typography>
                  <div className="resume__attachments">
                    {student.portfolio.map((item, i) => {
                      return (
                        <Button
                          key={i}
                          /* startDecorator={<BrushOutlinedIcon />} */
                          variant="outlined"
                          className="resume__btn resume__btn-type-contact"
                          type="button"
                          onClick={() => window.location.replace(item.src)}
                        >
                          {item.name}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
            <section className="resume__section">
              <div className="resume__title">
                <Typography level="h2">
                  Опыт работы — {student.jobExpirience}
                </Typography>
              </div>
              {student.jobExpirienceDescription.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="resume__wrapper">
                      <Typography level="h3" fontWeight="md">
                        {item.name}
                      </Typography>
                      <div className="resume__wrapper resume__wrapper_accent">
                        <Typography
                          level="title-md"
                          className="resume__text resume__text_accent"
                        >
                          {item.date}
                        </Typography>
                        <Typography
                          level="title-md"
                          className="resume__text resume__text_accent"
                        >
                          {item.organization}
                        </Typography>
                      </div>
                    </div>
                    <p className="resume__expirience_desc">{item.text}</p>
                  </div>
                );
              })}
            </section>
            <section className="resume__section">
              <div className="resume__title">
                <Typography level="h2">Навыки</Typography>
              </div>
              <ul className="resume__list">
                {student.skills.map((item, i) => (
                  <li key={i} className="resume__list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="resume__section">
              <div className="resume__title">
                <Typography level="h2">Образование</Typography>
              </div>

              {student.education.map((item, i) => {
                return (
                  <div className="resume__wrapper" key={i}>
                    <Typography level="h3" fontWeight="md">
                      {item.name}
                    </Typography>
                    <div className="resume__wrapper resume__wrapper_accent">
                      <Typography
                        level="title-md"
                        className="resume__text resume__text_accent"
                      >
                        {item.data}
                      </Typography>
                      <Typography
                        level="title-md"
                        className="resume__text resume__text_accent"
                      >
                        {item.organization}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </section>
            <section className="resume__section">
              <div className="resume__title">
                <Typography level="h2">Обо мне</Typography>
              </div>
              <Typography level="body-lg">{student.aboutMe}</Typography>
            </section>
            <section className="resume__section">
              <div className="resume__wrapper_btn">
                <div className="resume__btn-group">
                  <MyButton
                    variant="outlined"
                    className="resume__btn resume__btn-type-action"
                    type="button"
                    onClick={() => alert("Вы скачали резюме")}
                  >
                    Скачать резюме
                  </MyButton>
                  <MyButton
                    variant="outlined"
                    className="resume__btn resume__btn-type-action"
                    onClick={() => alert("Вы перенесли в базу")}
                  >
                    Перенести в базу
                  </MyButton>
                </div>
                {location.pathname !== "/favorites" && (
                  <MyButton onClick={() => alert("Вы пригласили человека")}>
                    Пригласить
                  </MyButton>
                )}
              </div>
            </section>
          </article>
        </ModalWindow>
      </StyledEngineProvider>
    );
};

export default ResumeModal;
