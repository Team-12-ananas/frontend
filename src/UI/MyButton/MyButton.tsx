import { Button } from "@mui/joy";
import { PropsWithChildren } from "react";
import "./MyButton.scss";
type TFuncWithEvent = (e: React.MouseEvent) => void;

interface IProps {
  type?: "submit" | "button";
  variant?: "plain" | "solid" | "outlined" | "soft";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  startDecorator?: React.ReactNode;
  onClick?: TFuncWithEvent | (() => void);
}

const MyButton: React.FC<PropsWithChildren<IProps>> = ({
  children,
  type = "submit",
  variant = "solid",
  size = "lg",
  disabled = false,
  className = "",
  startDecorator = null,
  onClick,
}) => {
  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      className={className}
      disabled={disabled}
      startDecorator={startDecorator}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MyButton;
