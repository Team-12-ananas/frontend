import { ModalOverflow, ModalClose, ModalDialog, Modal } from "@mui/joy";
import React from "react";
import "./ModalWindow.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  setModalCurrentIdResume,
  setShow,
} from "../../redux/slices/modalSlice";

type Props = {
  children?: React.ReactNode;
};
const ModalWindow: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.modal.isShow);
  const onClose = () => {
    dispatch(setShow(false));
    dispatch(setModalCurrentIdResume(null));
  };

  return (
    <Modal open={open} onClose={onClose} className="modal-window">
      <ModalOverflow className="modal-window__overflow">
        <ModalDialog
          sx={{
            maxWidth: 900,
            borderRadius: "lg", // 12px
            px: 4, //  1 = 8px x 4 = 32px,
            py: 5, // 40px
          }}
        >
          {children}
          <ModalClose sx={{ m: 1 }} />
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};

export default ModalWindow;
