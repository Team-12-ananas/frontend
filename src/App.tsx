import { Route, Routes } from "react-router";
import classes from "./App.module.scss";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PromoPage from "./pages/PromoPage/PromoPage";
import MyVacanciesPage from "./pages/MyVacanciesPage/MyVacanciesPage";
import CreateVacancyPage from "./pages/CreateVacancyPage/CreateVacancyPage";


function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" Component={PromoPage} />
        <Route path="/my-vacancies" Component={MyVacanciesPage} />
        <Route path="/create" Component={CreateVacancyPage} />
        <Route
          path="/profile"
          element={<ProtectedRoute Component={ProfilePage} />}
        />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </div>
  );
}

export default App;
