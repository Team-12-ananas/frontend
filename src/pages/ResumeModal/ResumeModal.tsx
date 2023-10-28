// import React from "react";
import "./ResumeModal.scss";
import ModalWindow from "../../components/Modal/ModalWindow";
import { StyledEngineProvider } from "@mui/joy";

const ResumeModal = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ModalWindow>
        <article className="resume">
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </article>
      </ModalWindow>
    </StyledEngineProvider>
  );
};

export default ResumeModal;
