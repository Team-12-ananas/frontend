import { Chip, StyledEngineProvider } from "@mui/joy";
import "./VacancyPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import ResumeCard from "../../components/ResumeCard/ResumeCard";
import { useParams } from "react-router-dom";
import {
  JobPostRequest,
  addStudentToFavorite,
  getVacancyById,
} from "../../mockapi/api-vacancy";
import { useEffect, useState } from "react";
import { IStudent, getStudents } from "../../mockapi/api-students";
import {
  setModalCurrentIdResume,
  setModalCurrentIdVacancy,
  setShow,
} from "../../redux/slices/modalSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

const VacancyPage: React.FC = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState<JobPostRequest | null>(null);
  const [students, setStudents] = useState<IStudent[] | null>(null);
  const [favoritesResume, setFavoritesResume] = useState<IStudent[]>([]);
  const [findedResume, setFindedResume] = useState<IStudent[]>([]);
  const dispatch = useAppDispatch();

  function handlePopupOpen(studentId: number) {
    if (vacancy?.id) {
      dispatch(setModalCurrentIdResume(studentId));
      dispatch(setModalCurrentIdVacancy(vacancy?.id));
      dispatch(setShow(true));
    }
  }

  async function handleClickCardButton(studentId: number) {
    try {
      if (vacancy?.id) {
        await addStudentToFavorite(vacancy?.id, studentId);
        if (favoritesResume.find((item) => item.id === studentId)) return;
        setFavoritesResume(
          (prev) =>
            [
              ...prev,
              findedResume.find((item) => item.id === studentId),
            ] as IStudent[]
        );
        setFindedResume((prev) => prev.filter((item) => item.id !== studentId));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getVacancyAndStudents(id: string) {
      const dataVacancy = await getVacancyById(+id);
      const dataStudents = await getStudents();
      setVacancy(dataVacancy);
      setStudents(dataStudents);
      setFavoritesResume(
        dataStudents.filter((item) => vacancy?.favorities?.includes(item.id))
      );
      setFindedResume(
        dataStudents.filter((item) => !vacancy?.favorities?.includes(item.id))
      );
    }

    if (id) {
      try {
        getVacancyAndStudents(id);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id, vacancy?.favorities]);

  if (vacancy && students)
    return (
      <StyledEngineProvider injectFirst>
        <Header />
        <main className="vacancy-page">
          <section className="aboutVacancy">
            <div className=" aboutVacancy__container">
              <div className="vacancyDiscr">
                <h2 className="nameVacancy">{vacancy.name}</h2>
                <div className="budgetVacancy">
                  <h2 className="budgetVacancyOk">{vacancy.min_salary} ₽</h2>
                  <p className="budgetVacancyMax">
                    Бюджет {vacancy.max_salary} ₽
                  </p>
                </div>
                <p className="townVacancy">{vacancy.city}</p>
                <p className="phoneVacance">{vacancy.phone}</p>
                <p className="emailVacancy">{vacancy.email}</p>
              </div>

              <div className="stecVacancy">
                {vacancy.keySkills.map((item, i) => {
                  return (
                    <Chip className="stecVacancyButton" size="lg" key={i}>
                      {item}
                    </Chip>
                  );
                })}
              </div>

              <div className="editVacancy">
                <button className="editButton">В работе</button>
                <button className="editButton">Редактировать</button>
                <button className="editButton">В архив</button>
              </div>
            </div>
          </section>
          <section className="table container">
            <div className="selectedVacancy">
              <h2 className="tableTitle">
                Подобранный список {findedResume.length}
              </h2>

              {findedResume.map((item, i) => {
                return (
                  <ResumeCard
                    resume={item}
                    key={i}
                    inBase={vacancy.base?.includes(item.id)}
                    onClick={handleClickCardButton}
                    handlePopupOpen={handlePopupOpen}
                  />
                );
              })}
              <button className="stillButton">Показать еще</button>
            </div>
            <div className="chooseVacancy">
              <h2 className="tableTitle">Подходит {favoritesResume.length}</h2>
              {favoritesResume.map((item, i) => {
                return (
                  <ResumeCard
                    resume={item}
                    key={i}
                    inBase={vacancy.base?.includes(item.id)}
                    onClick={() =>
                      alert("Вы пригласили человека на собеседование!")
                    }
                    isFavorite
                    handlePopupOpen={handlePopupOpen}
                  />
                );
              })}
            </div>
          </section>
        </main>
        <Footer />
      </StyledEngineProvider>
    );
};

export default VacancyPage;
