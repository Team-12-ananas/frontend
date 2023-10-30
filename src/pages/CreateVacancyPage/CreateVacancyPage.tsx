import StyledEngineProvider from "@mui/joy/styles/StyledEngineProvider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./CreateVacancyPage.scss";
import VacancyForm from "../../components/VacancyForm/VacancyForm";
import { SyntheticEvent, useState } from "react";
import { addVacancy } from "../../mockapi/api-vacancy";
import { useNavigate } from "react-router-dom";
import { IFormValue, TEvent } from "../../types/types";

const CreateVacancyPageRef = () => {
  const navigate = useNavigate();
  const handleChangeInput = (e: TEvent, key: string) => {
    setFormValue((prev) => {
      return {
        ...prev,
        [key]: {
          ...prev[key as keyof IFormValue],
          value: e.target.value,
        },
      };
    });
  };

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

  const handleChangeDropDownMulty = (
    newValue: string[],
    key: keyof IFormValue
  ) => {
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

  const [formValue, setFormValue] = useState<IFormValue>({
    name: {
      description: "Название вакансии",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "name"),
    },
    description: {
      description: "Описание вакансии",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "description"),
    },
    min_salary: {
      description: "Зарплата от",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "min_salary"),
    },
    max_salary: {
      description: "Максимальный бюджет",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "max_salary"),
    },
    phone: {
      description: "Телефон",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "phone"),
    },
    email: {
      description: "Email",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "email"),
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
    education: {
      description: "Образование",
      value: null,
      onChange: (_: SyntheticEvent<Element, Event>, newValue: string | null) =>
        handleChangeDropDownSingle(newValue, "education"),
    },
    projectActivities: {
      description: "Проектная деятельность",
      value: null,
      onChange: (_: SyntheticEvent<Element, Event>, newValue: string | null) =>
        handleChangeDropDownSingle(newValue, "projectActivities"),
    },
    keySkills: {
      description: "Ключевые навыки",
      value: [],
      onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) =>
        handleChangeDropDownMulty(newValue, "keySkills"),
    },
    employmentType: {
      description: "Тип занятости",
      value: [],
      onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) =>
        handleChangeDropDownMulty(newValue, "employmentType"),
    },
    jobExpirience: {
      description: "Опыт работы",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "jobExpirience"),
    },
    city: {
      description: "Город",
      value: "",
      onChange: (e: TEvent) => handleChangeInput(e, "city"),
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value: Record<string, string | string[] | null> = {};
    let key: keyof IFormValue;
    for (key in formValue) {
      const element = formValue[key].value;
      value[key] = element;
    }
    console.log("addVacancy begin");
    addVacancy(value)
      .then((result) => {
        console.log("addVacancy OK");
        console.log(result);
        navigate("/my-vacancies", { replace: true });
      })
      .catch((err) => {
        console.log("addVacancy catch - " + err);
      })
      .finally(() => {
        console.log("addVacancy end");
      });
  }

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="createVacancyPage">
        <div className="createVacancyPage__container">
          <VacancyForm formValue={formValue} handleSubmit={handleSubmit} />
        </div>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default CreateVacancyPageRef;
