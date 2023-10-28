import { Button } from "@mui/joy";
import { PropsWithChildren } from "react";
import "./MyButtonSubmit.scss";

interface IProps {
  type?: "submit" | "button";
}

const MyButtonSubmit: React.FC<PropsWithChildren<IProps>> = ({
  children,
  type = "submit",
}) => {
  return (
    <Button size="lg" type={type} className="my-button">
      {children}
    </Button>
  );
};

export default MyButtonSubmit;
