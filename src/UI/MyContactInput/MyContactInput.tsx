import { FormControl, FormLabel, Input } from "@mui/joy";
import "./MyContactInput.scss";

type TEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface IProps {
  label: string;
  value: string | string[];
  onChange: (e: TEvent) => void;
  type?: string;
  placeholder?: string;
}

const MyContactInput: React.FC<IProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => {
  return (
    <FormControl className="my-contact-input__input-type-short">
      <FormLabel className="my-contact-input__input-label">{label}</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="my-contact-input__input"
      />
    </FormControl>
  );
};

export default MyContactInput;
