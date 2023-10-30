import { Route, Routes } from "react-router";
import classes from "./App.module.scss";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PromoPage from "./pages/PromoPage/PromoPage";
import MyVacanciesPage from "./pages/MyVacanciesPage/MyVacanciesPage";
import CreateVacancyPage from "./pages/CreateVacancyPage/CreateVacancyPage";
import VacancyPage from "./pages/VacancyPage/VacancyPage";
import ResumeModal from "./components/ResumeModal/ResumeModal";
//TODO(zang3tsu88) для синхронной верстки, и сравнения с исходником.
import VacancyPageV2 from "./pages/VacancyPage/VacancyPageV2";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" Component={PromoPage} />
        <Route path="/my-vacancies" Component={MyVacanciesPage} />
        <Route path="/create" Component={CreateVacancyPage} />
        <Route path="/vacancy/:id" Component={VacancyPage} />
        <Route path="/vacancy/v2/:id" Component={VacancyPageV2} />
        <Route
          path="/profile"
          element={<ProtectedRoute Component={ProfilePage} />}
        />
        <Route path="*" Component={ErrorPage} />
      </Routes>
      <ResumeModal />
    </div>
  );
}

export default App;
