import { FormControl, FormLabel } from "@mui/joy";
import Autocomplete from "@mui/joy/Autocomplete";
import { SyntheticEvent } from "react";
import "./MyDropdown.scss";

interface IProps {
  label: string;
  value: string | null;
  onChange: (
    _: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => void;
  type?: string;
  placeholder?: string;
  options: string[];
}

const MyDropdown: React.FC<IProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "Подсказка",
}) => {
  return (
    <FormControl className="my-dropdown__dropdown">
      <FormLabel className="my-dropdown__input-label">{label}</FormLabel>
      <Autocomplete
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        className="my-dropdown__dropdown"
      />
    </FormControl>
  );
};

export default MyDropdown;
