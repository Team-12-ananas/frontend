// import { DragEvent, useState } from 'react';

import { StyledEngineProvider } from "@mui/joy";
import "./VacancyPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import iconKeyboardArrowDown from "../../assets/icons/iconCaretDown.svg";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import ResumeCard from "../../components/ResumeCard/ResumeCard";

const VacancyPage: React.FC = () => {
  const options = ["В работе", "Закрыта"];
  const optionsElement = options.map((item) => {
    return (
      <Option value={item} className="atWork" key={item}>
        {item}
      </Option>
    );
  });

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="container">
        <section className="aboutVacancy">
          <div className=" aboutVacancy__container">
            <div className="vacancyDiscr">
              <h2 className="nameVacancy">
                Графический дизайнер/ Дизайнер UX/UI
              </h2>
              <div className="budgetVacancy">
                <h2 className="budgetVacancyOk">50 000 ₽</h2>
                <p className="budgetVacancyMax">Бюджет 100 000 ₽</p>
              </div>
              <p className="townVacancy">Москва</p>
              <p className="phoneVacance">+7-984-432-33-11</p>
              <p className="emailVacancy">strawberries@yandex.ru</p>
            </div>

            <div className="stecVacancy">
              <button className="stecVacancyButton">HTML</button>
              <button className="stecVacancyButton">CSS</button>
              <button className="stecVacancyButton">JavaScript</button>
              <button className="stecVacancyButton">TypeScript</button>
              <button className="stecVacancyButton">WebPack</button>
              <button className="stecVacancyButton">MUI</button>
            </div>

            <div className="editVacancy">
              <Select
                defaultValue={options[0]}
                variant="plain"
                indicator={<img src={iconKeyboardArrowDown} />}
                className="atWork"
                placeholder="Выбрать"
              >
                {optionsElement}
              </Select>
              <button className="editButton">Редактировать</button>
            </div>
          </div>
        </section>
        <section className="table">
          <div className="selectedVacancy">
            <h2 className="tableTitle">Подобранный список 25</h2>
            <ResumeCard />
            <button className="stillButton">Показать еще</button>
          </div>
          <div className="chooseVacancy">
            <h2 className="tableTitle">Подходит 1</h2>
            <ResumeCard />
          </div>
        </section>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default VacancyPage;
