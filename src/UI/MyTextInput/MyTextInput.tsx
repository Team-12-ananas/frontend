import { FormControl, FormLabel, Input, FormHelperText } from "@mui/joy";
import "./MyTextInput.scss";

type TEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface IProps {
  label: string;
  value: string | string[];
  onChange: (e: TEvent) => void;
  helperText?: string;
  placeholder?: string;
  short?: boolean;
}

const MyTextInput: React.FC<IProps> = ({
  label,
  value,
  onChange,
  helperText = "",
  placeholder = "",
  short = false,
}) => {
  return (
    <FormControl>
      <FormLabel className="my-text-input__input-label">{label}</FormLabel>
      <Input
        className={`my-text-input__input ${
          short ? "my-text-input__input-type-short" : ""
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {helperText && (
        <FormHelperText className="my-text-input__input-helpertext">
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default MyTextInput;
