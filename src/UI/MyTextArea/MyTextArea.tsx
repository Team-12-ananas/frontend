import { FormControl, FormLabel, Textarea } from "@mui/joy";
import "./MyTextArea.scss";

type TEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface IProps {
  label: string;
  value: string | string[];
  onChange: (e: TEvent) => void;
  placeholder?: string;
}

const MyTextArea: React.FC<IProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <FormControl className="my-textarea__textarea">
      <FormLabel className="my-textarea__input-label">{label}</FormLabel>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minRows={3}
      />
    </FormControl>
  );
};

export default MyTextArea;
