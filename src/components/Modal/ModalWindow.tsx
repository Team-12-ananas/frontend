import { Button, Modal, ModalClose, ModalDialog } from "@mui/joy";
import React from "react";
import "./ModalWindow.scss";

type Props = {
  children?: React.ReactNode;
};
const ModalWindow: React.FC<Props> = ({ children }) => {
  //TODO: Предумать как управлять стейтом и кнопка открытия попапа.
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        //TODO(zang3tsu88): заполнить aria-label или удалить
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ModalDialog
          sx={{
            maxWidth: 900,
            borderRadius: "lg", // 12px
            px: 4, //  1 = 8px x 4 = 32px,
            py: 5, // 40px
            boxShadow: "lg", // TODO: По макету вроде нет, если что удалить
          }}
        >
          <ModalClose sx={{ m: 1 }} />

          {children}
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};

export default ModalWindow;
