import "./VacancyForm.scss";
import StyledEngineProvider from "@mui/joy/styles/StyledEngineProvider";
import { Box, Radio, Typography } from "@mui/joy";
import MyButtonSubmit from "../../UI/MyButton/MyButton";
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
import { IFormValue } from "../../types/types";

interface IProps {
  formValue: IFormValue;
  handleSubmit: (e: React.FormEvent) => void;
  title?: string;
}

const VacancyForm: React.FC<IProps> = ({
  formValue,
  handleSubmit,
  title = dictionary.createVacancyPageTitle,
}) => {
  const jobExpirienceElem = dictionary.jobExpirience.map((item, i) => (
    <Radio key={i} value={item} label={item} />
  ));

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Box component="form" onSubmit={handleSubmit} className="vacancy-form">
          <Typography className="vacancy-form__title" gutterBottom>
            {title}
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

            <Typography className="vacancy-form__subtitle vacancy-form__subtitle-type_down">
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
                  label={formValue.employmentType.description}
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
