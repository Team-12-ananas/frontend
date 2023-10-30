import { Box, Grid, Stack, StyledEngineProvider, Typography } from "@mui/joy";
import { useState, useEffect } from "react";
import "./MyVacanciesPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { JobPostRequest, getVacancies } from "../../mockapi/api-vacancy";
import VacancyCard from "../../components/VacancyCard/VacancyCard";
import MyButton from "../../UI/MyButton/MyButton";
import { useNavigate } from "react-router-dom";

const MyVacanciesPage: React.FC = () => {
  const [vacancies, setVacancies] = useState<JobPostRequest[]>([]);

  const navigate = useNavigate();

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

  function handleCreateClick() {
    navigate("/create", { replace: true });
  }

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="my-vacancies">
        <Box className="my-vacancies__container">
          <Stack direction={"row"} justifyContent="space-between">
            <Typography level="h1" fontWeight="md">
              Мои вакансии
            </Typography>
            <MyButton type="button" onClick={handleCreateClick}>
              Добавить вакансию
            </MyButton>
          </Stack>
          <Grid className="grid">
            {vacancies
              .filter((vacancy) => !vacancy.archive)
              .map((vacancy) => (
                <VacancyCard
                  vacancy={vacancy}
                  key={vacancy?.id}
                  withLink={vacancy.favorities?.length}
                  withPadding
                />
              ))}
          </Grid>
          <Stack direction={"row"} justifyContent="space-between">
            <Typography level="h1" fontWeight="md">
              В архиве
            </Typography>
          </Stack>
          <Grid className="grid">
            {vacancies
              .filter((vacancy) => vacancy.archive)
              .map((vacancy) => (
                <VacancyCard
                  vacancy={vacancy}
                  key={vacancy?.id}
                  withPadding
                  disabled
                />
              ))}
          </Grid>
        </Box>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default MyVacanciesPage;
