import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./CreateVacancyPage.scss";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
/* import Textarea from "@mui/joy/Textarea"; */
import StyledEngineProvider from "@mui/joy/styles/StyledEngineProvider";
import Autocomplete from "@mui/joy/Autocomplete";

const CreateVacancyPage: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="createVacancyPage">
        <div className="createVacancyPage__container">
          <form>
            <h1 className="createVacancyPage__title">Создание вакансии</h1>
            {/* <div className="createVacancyPage__box">
              <h2 className="createVacancyPage__subtitle">
                Основная информация
              </h2>
              <FormControl>
                <FormLabel className="createVacancyPage__input-label">
                  Название вакансии
                </FormLabel>
                <Input className="createVacancyPage__input" />
                <FormHelperText className="createVacancyPage__input-helpertext">
                  Рекомендуем использовать в названии вакансии больше ключевых
                  слов — так мы сможем подобрать более подходящих кандидатов
                </FormHelperText>
              </FormControl>
              <FormControl className="createVacancyPage__textarea">
                <FormLabel className="createVacancyPage__input-label">
                  Описание вакансии
                </FormLabel>
                <Textarea
                  placeholder="Мы в поиске специалиста, который готов вникать в потребности бизнеса…"
                  minRows={3}
                />
              </FormControl>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Зарплата
                  </FormLabel>
                  <Input
                    startDecorator={"₽"}
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Максимальный бюджет
                  </FormLabel>
                  <Input
                    startDecorator={"₽"}
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
              </div>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Телефон
                  </FormLabel>
                  <Input
                    placeholder={"+7"}
                    type="tel"
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Email:
                  </FormLabel>
                  <Input
                    placeholder={"strawberries@yandex.ru"}
                    type="email"
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                </FormControl>
              </div>
            </div> */}
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
                    Специальность
                  </FormLabel>
                  <Autocomplete
                    placeholder="Подсказка"
                    options={["1", "2", "3"]}
                    className="createVacancyPage__dropdown"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Специализация
                  </FormLabel>
                  <Autocomplete
                    placeholder="Подсказка"
                    options={["1", "2", "3"]}
                    className="createVacancyPage__dropdown"
                  />
                </FormControl>
              </div>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Образование
                  </FormLabel>
                  <Autocomplete
                    placeholder="Подсказка"
                    options={["1", "2", "3"]}
                    className="createVacancyPage__dropdown"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Проектная деятельность
                  </FormLabel>
                  <Autocomplete
                    placeholder="Подсказка"
                    options={["1", "2", "3"]}
                    className="createVacancyPage__dropdown"
                  />
                </FormControl>
              </div>
              <div className="createVacancyPage__wrapper">
                <FormControl>
                  <FormLabel className="createVacancyPage__input-label">
                    Ключевые навыки
                  </FormLabel>
                  <Input
                    placeholder="Placeholder"
                    className="createVacancyPage__input createVacancyPage__input-type-short"
                  />
                  <FormHelperText className="createVacancyPage__input-helpertext createVacancyPage__input-helpertext-type-short">
                    Добавьте навыки, которыми должен обладать кандидат
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default CreateVacancyPage;
