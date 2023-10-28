import { SyntheticEvent, useState } from "react";
import "./VacancyForm.scss";
import StyledEngineProvider from "@mui/joy/styles/StyledEngineProvider";
import { Box, Radio, Typography } from "@mui/joy";
import MyButtonSubmit from "../../UI/MyButtonSubmit/MyButtonSubmit";
import MyDropDownMulty from "../../UI/MyDropDownMulty/MyDropDownMulty";
import MyContactInput from "../../UI/MyContactInput/MyContactInput";
import MyRadioButtonGroup from "../../UI/MyRadioButtonGroup/MyRadioButtonGroup";
import MySalaryInput from "../../UI/MySalaryInput/MySalaryInput";
import MyTextInput from "../../UI/MyTextInput/MyTextInput";
import MyDropdown from "../../UI/MyDropdown/MyDropdown";
import MyTextArea from "../../UI/MyTextArea/MyTextArea";
import MyChipsField from "../../UI/MyChipsField/MyChipsField";
import MyCheckBoxMulty from "../../UI/MyCheckBoxMulty/MyCheckBoxMulty";
import dictionary from "../../constants/CreateVacancyPage";

const VacancyForm = () => {
  type TEvent =
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>;

  type TFieldInput = {
    description: string;
    value: string | string[];
    onChange: (e: TEvent) => void;
  };

  type TFieldDrowDownSingle = {
    description: string;
    value: string | null;
    onChange: (
      _: SyntheticEvent<Element, Event>,
      newValue: string | null
    ) => void;
  };

  type TFieldDrowDownMulty = {
    description: string;
    value: string[];
    onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) => void;
  };

  interface IFormValue {
    name: TFieldInput;
    description: TFieldInput;
    min_salary: TFieldInput;
    max_salary: TFieldInput;
    phone: TFieldInput;
    email: TFieldInput;
    specialty: TFieldDrowDownSingle;
    specializationType: TFieldDrowDownSingle;
    education: TFieldDrowDownSingle;
    projectActivities: TFieldDrowDownSingle;
    keySkills: TFieldDrowDownMulty;
    employmentType: TFieldDrowDownMulty;
    jobExpirience: TFieldInput;
    city: TFieldInput;
  }

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
    console.log(value); //TODO Заменить консоль лог на функцию с API
  }

  const jobExpirienceElem = dictionary.jobExpirience.map((item, i) => (
    <Radio key={i} value={item} label={item} />
  ));

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Box component="form" onSubmit={handleSubmit} className="vacancy-form">
          <Typography className="vacancy-form__title" gutterBottom>
            {dictionary.createVacancyPageTitle}
          </Typography>
          <div className="vacancy-form__box">
            <Typography className="vacancy-form__subtitle" gutterBottom>
              {dictionary.createVacancyPageSubtitleFirst}
            </Typography>
            <MyTextInput
              label={formValue.name.description}
              value={formValue.name.value}
              onChange={formValue.name.onChange}
              helperText={dictionary.createVacancyPageRecomendation}
            />
            <MyTextArea
              label={formValue.description.description}
              value={formValue.description.value}
              onChange={formValue.description.onChange}
              placeholder={dictionary.placeholderDescriptionVacancy}
            />

            <div className="vacancy-form__wrapper">
              <MySalaryInput
                label={formValue.min_salary.description}
                value={formValue.min_salary.value}
                onChange={formValue.min_salary.onChange}
              />
              <MySalaryInput
                label={formValue.max_salary.description}
                value={formValue.max_salary.value}
                onChange={formValue.max_salary.onChange}
              />
            </div>

            <div className="vacancy-form__wrapper">
              <MyContactInput
                label={formValue.phone.description}
                value={formValue.phone.value}
                onChange={formValue.phone.onChange}
                type="tel"
                placeholder={"+7"}
              />
              <MyContactInput
                label={formValue.email.description}
                value={formValue.email.value}
                onChange={formValue.email.onChange}
                type="email"
                placeholder={"strawberries@yandex.ru"}
              />
            </div>
          </div>
          <div className="vacancy-form__box">
            <Typography className="vacancy-form__subtitle">
              {dictionary.createVacancyPageSubtitleSecond}
            </Typography>
            <Typography className="vacancy-form__description">
              {dictionary.createVacancyPageDescription}
            </Typography>

            <div className="vacancy-form__wrapper">
              <MyDropdown
                label={formValue.specialty.description}
                value={formValue.specialty.value}
                onChange={formValue.specialty.onChange}
                options={dictionary.specialtyOptions}
              />
              <MyDropdown
                label={formValue.specializationType.description}
                value={formValue.specializationType.value}
                onChange={formValue.specializationType.onChange}
                options={dictionary.specializationTypeOptions}
              />
            </div>

            <div className="vacancy-form__wrapper">
              <MyDropdown
                label={formValue.education.description}
                value={formValue.education.value}
                onChange={formValue.education.onChange}
                options={dictionary.educationOptions}
              />
              <MyDropdown
                label={formValue.projectActivities.description}
                value={formValue.projectActivities.value}
                onChange={formValue.projectActivities.onChange}
                options={dictionary.projectActivitiesOptions}
              />
            </div>

            <div className="vacancy-form__wrapper">
              <MyDropDownMulty
                label={formValue.keySkills.description}
                value={formValue.keySkills.value}
                onChange={formValue.keySkills.onChange}
                helperText={dictionary.createVacancyPageHelperTextKeyskills}
              />
              <MyChipsField
                chipsData={dictionary.chipsData}
                onChange={formValue.keySkills.onChange}
                value={formValue.keySkills.value}
              />
            </div>

            <div className="vacancy-form__wrapper">
              <div className="vacancy-form__wrapper-element">
                <MyCheckBoxMulty
                  data={dictionary.employmentType}
                  value={formValue.employmentType.value}
                  onChange={formValue.employmentType.onChange}
                />
              </div>
              <div className="vacancy-form__wrapper-element">
                <MyRadioButtonGroup
                  label={formValue.jobExpirience.description}
                  value={formValue.jobExpirience.value}
                  onChange={formValue.jobExpirience.onChange}
                >
                  {jobExpirienceElem}
                </MyRadioButtonGroup>
              </div>
            </div>
            <MyTextInput
              label={formValue.city.description}
              value={formValue.city.value}
              onChange={formValue.city.onChange}
              short
            />
            <MyButtonSubmit>
              {dictionary.createVacancyPageButtonText}
            </MyButtonSubmit>
          </div>
        </Box>
      </StyledEngineProvider>
    </>
  );
};

export default VacancyForm;
