import { Route, Routes } from "react-router";
import classes from "./App.module.scss";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PromoPage from "./pages/PromoPage/PromoPage";
import MyVacanciesPage from "./pages/MyVacanciesPage/MyVacanciesPage";
import FavoritePage from "./pages/FavoritesPage/FavoritesPage";
import CreateVacancyPage from "./pages/CreateVacancyPage/CreateVacancyPage";
import VacancyPage from "./pages/VacancyPage/VacancyPage";
import ResumeModal from "./components/ResumeModal/ResumeModal";
import EditVacancyPage from "./pages/EditVacancyPage/EditVacancyPage";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" Component={PromoPage} />
        <Route path="/my-vacancies" Component={MyVacanciesPage} />
        <Route path="/favorites" Component={FavoritePage} />
        <Route path="/vacancy/:id" Component={VacancyPage} />
        <Route path="/edit-vacancy/:id" Component={EditVacancyPage} />
        <Route
          path="/create"
          element={<ProtectedRoute Component={CreateVacancyPage} />}
        />
        <Route path="*" Component={ErrorPage} />
      </Routes>
      <ResumeModal />
    </div>
  );
}

export default App;
