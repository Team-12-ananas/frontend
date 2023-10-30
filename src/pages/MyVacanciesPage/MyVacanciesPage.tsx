import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  StyledEngineProvider,
  Typography,
} from "@mui/joy";
import { useState, useEffect } from "react";
import "./MyVacanciesPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getVacancies } from "../../mockapi/api-vacancy";

const MyVacanciesPage: React.FC = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    getVacancies()
      .then((result) => {
        setVacancies(result);
        console.log("getVacancies OK");
        console.log(result);
      })
      .catch((err) => {
        console.log("getVacancies catch - " + err);
      })
      .finally(() => {
        console.log("getVacancies end");
      });
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="my-vacancies">
        <Box className="my-vacancies__container">
          <Stack direction={"row"} justifyContent="space-between">
            <Typography level="h1" fontWeight="md">
              Мои вакансии
            </Typography>
            <Button>Добавить вакансию</Button>
          </Stack>
          <Grid className="grid">
            {vacancies
              .filter((vacancy) => !vacancy.archive)
              .map((vacancy) => (
                <Box className="card">
                  <h3 className="card__title">{vacancy.name}</h3>
                  <div className="card__cost">
                    <span className="card__price">{vacancy.min_salary} ₽</span>
                    <span className="card__budget">
                      Бюджет {vacancy.max_salary} ₽
                    </span>
                  </div>
                  <p className="card__city">{vacancy.city}</p>
                  <div className="card__contacts">
                    <p className="card__phone">{vacancy.phone}</p>
                    <p className="card__email">{vacancy.email}</p>
                  </div>
                  <Link href="#" className="card__link">
                    Подобрано {vacancy.favorities.length} кандидата
                  </Link>
                </Box>
              ))}
          </Grid>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography level="h1" fontWeight="md">
              В архиве
            </Typography>
          </Stack>
          <Grid className="grid">
            {vacancies
              .filter((vacancy) => !vacancy.archive)
              .map((vacancy) => (
                <Box className="card card_disabled">
                  <h3 className="card__title">{vacancy.name}</h3>
                  <div className="card__cost">
                    <span className="card__price">{vacancy.min_salary} ₽</span>
                    <span className="card__budget">
                      Бюджет {vacancy.max_salary} ₽
                    </span>
                  </div>
                  <p className="card__city">{vacancy.city}</p>
                  <div className="card__contacts">
                    <p className="card__phone">{vacancy.phone}</p>
                    <p className="card__email">{vacancy.email}</p>
                  </div>
                  {/* <Link href="#" className="card__link"></Link> */}
                </Box>
              ))}
          </Grid>
        </Box>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default MyVacanciesPage;
