import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./CreateVacancyPage.scss";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import StyledEngineProvider from "@mui/joy/styles/StyledEngineProvider";
import Autocomplete from "@mui/joy/Autocomplete";
import Chip from "@mui/joy/Chip";
import { SyntheticEvent, useState } from "react";
import {
  Button,
  Checkbox,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/joy";

const CreateVacancyPage: React.FC = () => {
  const chipsData = [
    "Специальность",
    "Специализация",
    "Опыт работы",
    "Проектная деятельность",
    "Трудоустроился на ПТ",
  ];

  const employmentType = [
    "Не имеет значения",
    "Офис",
    "Гибрид",
    "Удалённая работа",
  ];

  const jobExpirience = ["Не имеет значения", "От 1 года", "От 3 до 6 лет"];

  function helperOnSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value: Record<string, string | string[] | null> = {};
    let key: keyof IFormValue;
    for (key in formValue) {
      const element = formValue[key].value;
      value[key] = element;
    }
    console.log(value);
  }

  const jobExpirienceElem = jobExpirience.map((item, i) => (
    <Radio key={i} value={item} label={item} />
  ));

  const employmentTypeElem = employmentType.map((item, i) => (
    <ListItem key={i}>
      <Checkbox
        label={item}
        variant="outlined"
        onChange={(e) => {
          formValue.employmentType.onChange(
            e,
            formValue.employmentType.value.includes(item)
              ? formValue.employmentType.value.filter((elem) => elem !== item)
              : [...formValue.employmentType.value, item]
          );
        }}
      />
    </ListItem>
  ));

  const chipsElement = chipsData.map((item, index) => (
    <Chip
      key={index}
      className="createVacancyPage__input-chip"
      variant="outlined"
      color="primary"
      onClick={(e) =>
        formValue.keySkills.onChange(
          e,
          formValue.keySkills.value.includes(item)
            ? formValue.keySkills.value
            : [...formValue.keySkills.value, item]
        )
      }
    >
      {item}
    </Chip>
  ));

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

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="createVacancyPage">
        <div className="createVacancyPage__container">
          <form onSubmit={helperOnSubmit} className="createVacancyPage__form">
            <h1 className="createVacancyPage__title">Создание вакансии</h1>
            <div className="createVacancyPage__box">
              <h2 className="createVacancyPage__subtitle">
                Основная информация
              </h2>
              <FormControl>
                <FormLabel className="createVacancyPage__input-label">
                  {formValue.name.description}
                </FormLabel>
                <Input
                  className="createVacancyPage__input"
                  value={formValue.name.value}
                  onChange={formValue.name.onChange}
                />
                <FormHelperText className="createVacancyPage__input-helpertext">
                  Рекомендуем использовать в названии вакансии больше ключевых
                  слов — так мы сможем подобрать более подходящих кандидатов
                </FormHelperText>
              </FormControl>
              <FormControl className="createVacancyPage__textarea">
                <FormLabel className="createVacancyPage__input-label">
                  {formValue.description.description}
                </FormLabel>
                <Textarea
                  value={formValue.description.value}
                  onChange={formValue.description.onChange}
                  placeholder="Мы в поиске специалиста, который готов вникать в потребности бизнеса…"
                  minRows={3}
                />
              </FormControl>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.min_salary.description}
                  </FormLabel>
                  <Input
                    value={formValue.min_salary.value}
                    onChange={formValue.min_salary.onChange}
                    startDecorator={"₽"}
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.max_salary.description}
                  </FormLabel>
                  <Input
                    value={formValue.max_salary.value}
                    onChange={formValue.max_salary.onChange}
                    startDecorator={"₽"}
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
              </div>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.phone.description}
                  </FormLabel>
                  <Input
                    placeholder={"+7"}
                    type="tel"
                    value={formValue.phone.value}
                    onChange={formValue.phone.onChange}
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.email.description}
                  </FormLabel>
                  <Input
                    value={formValue.email.value}
                    onChange={formValue.email.onChange}
                    placeholder={"strawberries@yandex.ru"}
                    type="email"
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
              </div>
            </div>
            <div className="createVacancyPage__box">
              <div>
                <h2 className="createVacancyPage__subtitle">
                  Характеристики кандидата
                </h2>
                <p className="createVacancyPage__description">
                  На основе них мы подберём список самых подходящих кандидатов
                </p>
              </div>

              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.specialty.description}
                  </FormLabel>
                  <Autocomplete
                    value={formValue.specialty.value}
                    onChange={(_, newValue: string | null) =>
                      formValue.specialty.onChange(_, newValue)
                    }
                    placeholder="Подсказка"
                    options={[
                      "Специальность1",
                      "Специальность2",
                      "Специальность3",
                    ]}
                    className="createVacancyPage__dropdown"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.specializationType.description}
                  </FormLabel>
                  <Autocomplete
                    value={formValue.specializationType.value}
                    onChange={(_, newValue: string | null) =>
                      formValue.specializationType.onChange(_, newValue)
                    }
                    placeholder="Подсказка"
                    options={[
                      "Специализация1",
                      "Специализация2",
                      "Специализация3",
                    ]}
                    className="createVacancyPage__dropdown"
                  />
                </FormControl>
              </div>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.education.description}
                  </FormLabel>
                  <Autocomplete
                    value={formValue.education.value}
                    onChange={(_, newValue: string | null) =>
                      formValue.education.onChange(_, newValue)
                    }
                    placeholder="Подсказка"
                    options={["Образование1", "Образование2", "Образование3"]}
                    className="createVacancyPage__dropdown"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.projectActivities.description}
                  </FormLabel>
                  <Autocomplete
                    placeholder="Подсказка"
                    options={["Проектная1", "Проектная2", "Проектная3"]}
                    className="createVacancyPage__dropdown"
                    value={formValue.projectActivities.value}
                    onChange={(_, newValue: string | null) =>
                      formValue.projectActivities.onChange(_, newValue)
                    }
                  />
                </FormControl>
              </div>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    {formValue.keySkills.description}
                  </FormLabel>
                  <Autocomplete
                    multiple
                    freeSolo
                    options={[]}
                    value={formValue.keySkills.value}
                    onChange={(_, newValue: string[]) =>
                      formValue.keySkills.onChange(_, newValue)
                    }
                    className="createVacancyPage__input createVacancyPage__input-type-short createVacancyPage__input-type-area"
                    getOptionLabel={(option) => option}
                    renderTags={(tags, getTagProps) =>
                      tags.map((item, index) => (
                        <Chip
                          className="createVacancyPage__input-chip"
                          variant="outlined"
                          color="primary"
                          {...getTagProps({ index })}
                        >
                          {item}
                        </Chip>
                      ))
                    }
                  />
                  <FormHelperText className="createVacancyPage__input-helpertext createVacancyPage__input-helpertext-type-short">
                    Добавьте навыки, которыми должен обладать кандидат
                  </FormHelperText>
                </FormControl>
                <div className="createVacancyPage__chips">{chipsElement}</div>
              </div>
              <div className="createVacancyPage__wrapper">
                <div>
                  <Typography
                    id="type-of-employment"
                    level="body-sm"
                    fontWeight="lg"
                    mb={1}
                  >
                    {formValue.employmentType.description}
                  </Typography>
                  <div role="group" aria-labelledby="type-of-employment">
                    <List size="sm">{employmentTypeElem}</List>
                  </div>
                </div>
                <div>
                  <FormControl>
                    <Typography level="body-sm" fontWeight="lg" mb={1}>
                      {formValue.jobExpirience.description}
                    </Typography>
                    <RadioGroup
                      name="controlled-radio-buttons-group"
                      value={formValue.jobExpirience.value}
                      onChange={formValue.jobExpirience.onChange}
                      sx={{ my: 1 }}
                    >
                      {jobExpirienceElem}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <Input
                placeholder={formValue.city.description}
                type="text"
                value={formValue.city.value}
                onChange={formValue.city.onChange}
                className="createVacancyPage__input createVacancyPage__input-type-short"
              />
              <Button size="lg" type="submit">
                Создать вакансию
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};
export default CreateVacancyPage;
