import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  StyledEngineProvider,
  Typography,
} from "@mui/joy";
import "./MyVacanciesPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MyVacanciesPage: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <section className="my-vacancies">
        <Box className="my-vacancies__container">
          <Stack direction={"row"} justifyContent="space-between">
            <Typography level="h1" fontWeight="md">
              Мои вакансии
            </Typography>
            <Button>Добавить вакансию</Button>
          </Stack>
          <Grid className="grid">
            <Box className="card">
              <h3 className="card__title">
                Графический дизайнер/ Дизайнер UX/UI
              </h3>
              <div className="card__cost">
                <span className="card__price">50 000 ₽</span>
                <span className="card__budget">Бюджет 100 000 ₽</span>
              </div>
              <p className="card__city">Москва</p>
              <div className="card__contacts">
                <p className="card__phone">+7 984 432-33-11</p>
                <p className="card__email">strawberries@yandex.ru</p>
              </div>
              <Link href="#" className="card__link">
                Подобрано 22 кандидата
              </Link>
            </Box>
          </Grid>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography level="h1" fontWeight="md">
              В архиве
            </Typography>
          </Stack>
          <Grid className="grid">
            <Box className="card card_disabled">
              <h3 className="card__title">Дизайнер интерфейсов</h3>
              <div className="card__cost">
                <span className="card__price">50 000 ₽</span>
                <span className="card__budget">Бюджет 100 000 ₽</span>
              </div>
              <p className="card__city">Москва</p>
              <div className="card__contacts">
                <p className="card__phone">+7 984 432-33-11</p>
                <p className="card__email">strawberries@yandex.ru</p>
              </div>
              {/* <Link href="#" className="card__link"></Link> */}
            </Box>
            <Box className="card card_disabled">
              <h3 className="card__title">Дизайнер интерфейсов</h3>
              <div className="card__cost">
                <span className="card__price">50 000 ₽</span>
                <span className="card__budget">Бюджет 100 000 ₽</span>
              </div>
              <p className="card__city">Москва</p>
              <div className="card__contacts">
                <p className="card__phone">+7 984 432-33-11</p>
                <p className="card__email">strawberries@yandex.ru</p>
              </div>
              {/* <Link href="#" className="card__link"></Link> */}
            </Box>
            <Box className="card card_disabled">
              <h3 className="card__title">Дизайнер интерфейсов</h3>
              <div className="card__cost">
                <span className="card__price">50 000 ₽</span>
                <span className="card__budget">Бюджет 100 000 ₽</span>
              </div>
              <p className="card__city">Москва</p>
              <div className="card__contacts">
                <p className="card__phone">+7 984 432-33-11</p>
                <p className="card__email">strawberries@yandex.ru</p>
              </div>
              {/* <Link href="#" className="card__link"></Link> */}
            </Box>
          </Grid>
        </Box>
      </section>
      <Footer />
    </StyledEngineProvider>
  );
};

export default MyVacanciesPage;
