import { Button } from "@mui/joy";
import { PropsWithChildren } from "react";
import "./MyButton.scss";

interface IProps {
  type?: "submit" | "button";
  variant?: "plain" | "solid" | "outlined" | "soft";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

const MyButton: React.FC<PropsWithChildren<IProps>> = ({
  children,
  type = "submit",
  variant = "solid",
  size = "lg",
  disabled = false,
  className = "",
}) => {
  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      className={`my-button ${className}`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default MyButton;
