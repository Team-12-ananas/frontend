import "./EditVacancyPage.scss";
import StyledEngineProvider from "@mui/joy/styles/StyledEngineProvider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import VacancyForm from "../../components/VacancyForm/VacancyForm";
import { SyntheticEvent, useEffect, useState } from "react";
import {
  JobPostRequest,
  editVacancy,
  getVacancyById,
} from "../../mockapi/api-vacancy";
import { useNavigate, useParams } from "react-router-dom";
import { IFormValue, TEvent } from "../../types/types";

const EditVacancyPage: React.FC = () => {
  const { id } = useParams();
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

  useEffect(() => {
    async function getInitialState() {
      if (!id) return;
      const vacancy = await getVacancyById(+id);
      setFormValue(() => {
        const res: Record<string, string | string[] | null | unknown> = {};
        let keyVac: keyof JobPostRequest;
        let keyVal: keyof IFormValue;
        for (keyVac in vacancy) {
          const value = vacancy[keyVac];
          keyVal = keyVac as keyof IFormValue;
          if (formValue[keyVal]) {
            res[keyVal] = { ...formValue[keyVal], value } as unknown;
          }
        }
        console.log(res);
        return res as unknown as IFormValue;
      });
    }
    getInitialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!id) return;
    const value: Record<string, string | string[] | null> = {};
    let key: keyof IFormValue;
    for (key in formValue) {
      const element = formValue[key].value;
      value[key] = element;
    }
    editVacancy(+id, value)
      .then((result) => {
        console.log("addVacancy OK");
        console.log(result);
      })
      .then(() => {
        navigate(`/vacancy/${id}`, { replace: true });
      })
      .catch(() => {
        console.log("addVacancy catch - ");
      })
      .finally(() => {
        console.log("addVacancy end");
      });
  }

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="editVacancyPage">
        <div className="editVacancyPage__container">
          <VacancyForm
            formValue={formValue}
            handleSubmit={handleSubmit}
            title="Редактирование вакансии"
          />
        </div>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default EditVacancyPage;
