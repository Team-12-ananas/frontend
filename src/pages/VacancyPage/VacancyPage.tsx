import {
  Breadcrumbs,
  Button,
  Chip,
  Link,
  StyledEngineProvider,
  Typography,
} from "@mui/joy";
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
import { useEffect, useState, SyntheticEvent } from "react";
import { IStudent, getStudents } from "../../mockapi/api-students";
import {
  setModalCurrentIdResume,
  setModalCurrentIdVacancy,
  setShow,
} from "../../redux/slices/modalSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import VacancyCard from "../../components/VacancyCard/VacancyCard";

import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import MyDropdown from "../../UI/MyDropdown/MyDropdown";
import dictionary from "../../constants/CreateVacancyPage";

type TFieldDrowDownSingle = {
  description: string;
  value: string | null;
  onChange: (
    _: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => void;
};

interface IFormValue {
  skills: TFieldDrowDownSingle;
  specialty: TFieldDrowDownSingle;
  specializationType: TFieldDrowDownSingle;
}

const VacancyPageV2: React.FC = () => {
  const [isFilterOpened, setIsFilterOpen] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<IFormValue>({
    skills: {
      description: "Навыки",
      value: null,
      onChange: (_: SyntheticEvent<Element, Event>, newValue: string | null) =>
        handleChangeDropDownSingle(newValue, "skills"),
    },
    specialty: {
      description: "Специальность",
      value: null,
      onChange: (_: SyntheticEvent<Element, Event>, newValue: string | null) =>
        handleChangeDropDownSingle(newValue, "specialty"),
    },
    specializationType: {
      description: "Специализация",
      value: null,
      onChange: (_: SyntheticEvent<Element, Event>, newValue: string | null) =>
        handleChangeDropDownSingle(newValue, "specializationType"),
    },
  });
  const { id } = useParams();
  const [vacancy, setVacancy] = useState<JobPostRequest | null>(null);
  const [students, setStudents] = useState<IStudent[] | null>(null);
  const [favoritesResume, setFavoritesResume] = useState<IStudent[]>([]);
  const [findedResume, setFindedResume] = useState<IStudent[]>([]);
  const dispatch = useAppDispatch();

  const handleChangeDropDownSingle = (newValue: string | null, key: string) => {
    setFormValue((prev) => {
      return {
        ...prev,
        [key]: {
          ...prev[key as keyof IFormValue],
          value: newValue,
        },
      };
    });
  };

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
                  <Link underline="none" className="vacancy__edit">
                    Редактировать
                  </Link>
                  <Link underline="none" className="vacancy__archive">
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
                    <div className="vacancy__filter">
                      <div className="filter">
                        <div
                          className={`filter__card ${
                            isFilterOpened && "filter__card_minimized"
                          }`}
                        >
                          <div className="filter__settings">
                            <Button
                              color="neutral"
                              onClick={function () {
                                setIsFilterOpen((prev) => !prev);
                              }}
                              className="filter__btn filter__btn_arrow"
                              size="sm"
                              variant="plain"
                              endDecorator={
                                isFilterOpened ? (
                                  <KeyboardArrowUp />
                                ) : (
                                  <KeyboardArrowDown />
                                )
                              }
                            >
                              Настройка фильтров поиска
                            </Button>
                            <Button
                              color="neutral"
                              onClick={function () {}}
                              className="filter__btn filter__btn_remove"
                              size="sm"
                              variant="plain"
                              startDecorator={<DeleteOutline />}
                            >
                              Очистить фильтры
                            </Button>
                          </div>
                          <div className="filter__skills">
                            <MyDropdown
                              label={formValue.skills.description}
                              value={formValue.skills.value}
                              onChange={formValue.skills.onChange}
                              //TODO(zang3tu88): ТУТ словарь проверить, и вообще пройтись по тайпскрипту, проверить методы, интерфейсы и тп.
                              options={dictionary.specialtyOptions}
                            />

                            {/* TODO(zang3tsu88): у компонентов MyDropDown его родной класс - .my-dropdown__dropdown { width: 258px;}  мешает этим компонентам в карточке поиска встать во всю длинну родителя, если его убрать, то все будет нормально. У меня не получилось добавить к ним класс с модификатором чтоб его переписать.*/}
                          </div>
                          <div className="filter__speciality">
                            <MyDropdown
                              label={formValue.specialty.description}
                              value={formValue.specialty.value}
                              onChange={formValue.specialty.onChange}
                              options={dictionary.specialtyOptions}
                            />
                          </div>
                          <div className="filter__specialization">
                            <MyDropdown
                              label={formValue.specializationType.description}
                              value={formValue.specializationType.value}
                              onChange={formValue.specializationType.onChange}
                              options={dictionary.specializationTypeOptions}
                            />
                          </div>
                        </div>
                        <div className="filter__breadcrumbs-container">
                          <Breadcrumbs
                            separator={"•"}
                            aria-label="breadcrumbs"
                            className="filter__breadcrumbs"
                          >
                            {[
                              "Более опытные",
                              "Подходящее образование",
                              "Больше проектов",
                              "Готовы к переезду",
                            ].map((item: string) => (
                              <Link
                                key={item}
                                color="neutral"
                                href="#separators"
                              >
                                {item}
                              </Link>
                            ))}
                          </Breadcrumbs>
                        </div>
                      </div>
                    </div>
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
