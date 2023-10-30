import "./FavoritesPage.scss";
import { Box, Grid, Stack, StyledEngineProvider, Typography } from "@mui/joy";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { IStudent, getStudents } from "../../mockapi/api-students";
import ResumeCard from "../../components/ResumeCard/ResumeCard";
import { useEffect, useState } from "react";
import {
  setModalCurrentIdResume,
  setShow,
} from "../../redux/slices/modalSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

const FavoritePage: React.FC = () => {
  const [resumes, setResumes] = useState<IStudent[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getStudents()
      .then((result) => {
        setResumes(result);
      })
      .catch((err) => {
        console.log("getStudents catch - " + err);
      })
      .finally(() => {
        console.log("getStudents end");
      });
  }, []);

  function handleClickCardButton(id: number) {
    dispatch(setModalCurrentIdResume(id));
    dispatch(setShow(true));
    return;
  }

  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main className="favorites">
        <Box className="favorites__container">
          <Stack direction={"row"} justifyContent="space-between">
            <Typography level="h1" fontWeight="md">
              Избранное
            </Typography>
          </Stack>
          <Grid className="grid">
            {resumes.map((resume) => (
              <ResumeCard
                resume={resume}
                key={resume.id}
                inBase={false}
                isFavorite={false}
                handlePopupOpen={handleClickCardButton}
                onClick={() => {}}
              />
            ))}
          </Grid>
        </Box>
      </main>
      <Footer />
    </StyledEngineProvider>
  );
};

export default FavoritePage;
