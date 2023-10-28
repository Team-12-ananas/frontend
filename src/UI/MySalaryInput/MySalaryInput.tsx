import { FormControl, FormLabel, Input } from "@mui/joy";
import "./MySalaryInput.scss";

type TEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface IProps {
  label: string;
  value: string | string[];
  onChange: (e: TEvent) => void;
}

const MySalaryInput: React.FC<IProps> = ({ label, value, onChange }) => {
  return (
    <FormControl className="my-salary-input__input-type-short">
      <FormLabel className="my-salary-input__input-label">{label}</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        startDecorator={"₽"}
        className="my-salary-input__input"
      />
    </FormControl>
  );
};

export default MySalaryInput;
