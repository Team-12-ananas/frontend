import { FormControl, Typography, RadioGroup } from "@mui/joy";
import { PropsWithChildren } from "react";

type TEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface IProps {
  label: string;
  value: string | string[];
  onChange: (e: TEvent) => void;
}

const MyRadioButtonGroup: React.FC<PropsWithChildren<IProps>> = ({
  label,
  value,
  onChange,
  children,
}) => {
  return (
    <FormControl>
      <Typography level="body-sm" fontWeight="lg" mb={1}>
        {label}
      </Typography>
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={value}
        onChange={onChange}
        sx={{ my: 1 }}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

export default MyRadioButtonGroup;
