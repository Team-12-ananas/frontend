import { Button } from "@mui/joy";
import { PropsWithChildren } from "react";
import "./MyButton.scss";

interface IProps {
  type?: "submit" | "button";
  variant?: "plain" | "solid" | "outlined" | "soft";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  startDecorator?: React.ReactNode;
}

const MyButton: React.FC<PropsWithChildren<IProps>> = ({
  children,
  type = "submit",
  variant = "solid",
  size = "lg",
  disabled = false,
  className = "",
  startDecorator = null,
}) => {
  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      className={className}
      disabled={disabled}
      startDecorator={startDecorator}
    >
      {children}
    </Button>
  );
};

export default MyButton;
