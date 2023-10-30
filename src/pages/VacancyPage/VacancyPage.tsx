import { Chip, Link, StyledEngineProvider, Typography } from "@mui/joy";
import "./VacancyPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import ResumeCard from "../../components/ResumeCard/ResumeCard";
import { useNavigate, useParams } from "react-router-dom";
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
import VacancyCard from "../../components/VacancyCard/VacancyCard";

const VacancyPageV2: React.FC = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState<JobPostRequest | null>(null);
  const [students, setStudents] = useState<IStudent[] | null>(null);
  const [favoritesResume, setFavoritesResume] = useState<IStudent[]>([]);
  const [findedResume, setFindedResume] = useState<IStudent[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        <main className="vacancy">
          <header className="vacancy__header">
            <div className="vacancy__container">
              <div className="vacancy__info">
                <div className="vacancy__details">
                  <VacancyCard vacancy={vacancy}></VacancyCard>
                </div>
                <div className="vacancy__skills">
                  {vacancy.keySkills.map((item, i) => {
                    return (
                      <Chip className="vacancy__skill" size="lg" key={i}>
                        {item}
                      </Chip>
                    );
                  })}
                </div>
                <div className="vacancy__actions">
                  <p className="vacancy__state">В работе</p>
                  <Link
                    className="vacancy__edit"
                    underline="none"
                    onClick={() => navigate(`/edit-vacancy/${vacancy?.id}`)}
                  >
                    Редактировать
                  </Link>
                  <Link className="vacancy__archive" underline="none">
                    В архив
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <div className="vacancy__container">
            <section className="vacancy__body">
              <div className="two-columns">
                <div className="column column_left">
                  <div className="column__title">
                    <Typography level="h2" fontWeight="md">
                      Подобранный список {findedResume.length}
                    </Typography>
                  </div>
                  <div className="two-columns__content two-columns__content_left">
                    <div className="search">
                      <Typography level="h2">Здесь будет поиск</Typography>
                    </div>
                    <Typography level="h3">
                      А тут фильтры * И еще чутка * И еще фильтры
                    </Typography>
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
                    <button className="btn__show-more">Показать еще</button>
                  </div>
                </div>
                <div className="column column_right">
                  <div className="column__title">
                    <Typography level="h2" fontWeight="md">
                      Подходит {favoritesResume.length}
                    </Typography>
                  </div>
                  <div className="two-columns__content two-columns__content_right">
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
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </StyledEngineProvider>
    );
};

export default VacancyPageV2;
