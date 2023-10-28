import StyledEngineProvider from "@mui/joy/styles/StyledEngineProvider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./CreateVacancyPage.scss";
import VacancyForm from "../../components/VacancyForm/VacancyForm";

const CreateVacancyPageRef = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="createVacancyPage">
        <div className="createVacancyPage__container">
          <VacancyForm />
        </div>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default CreateVacancyPageRef;
