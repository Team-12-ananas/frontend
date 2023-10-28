import { FormControl, FormLabel, Chip, FormHelperText } from "@mui/joy";
import Autocomplete from "@mui/joy/Autocomplete";
import { SyntheticEvent } from "react";
import "./MyDropDownMulty.scss";

interface IProps {
  label: string;
  value: string[];
  onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) => void;
  helperText?: string;
  placeholder?: string;
  options?: string[];
}

const MyDropDownMulty: React.FC<IProps> = ({
  label,
  value,
  onChange,
  helperText,
  options = [],
}) => {
  return (
    <FormControl className="my-drowdown-multy__input-type-area">
      <FormLabel className="my-drowdown-multy__input-label">{label}</FormLabel>
      <Autocomplete
        multiple
        freeSolo
        options={options}
        value={value}
        onChange={onChange}
        className="my-drowdown-multy__input my-drowdown-multy__input-type-short my-drowdown-multy__input-type-area"
        renderTags={(tags, getTagProps) =>
          tags.map((item, index) => (
            <Chip
              className="my-drowdown-multy__input-chip"
              variant="outlined"
              color="primary"
              {...getTagProps({ index })}
            >
              {item}
            </Chip>
          ))
        }
      />
      {helperText && (
        <FormHelperText className="my-drowdown-multy__input-helpertext my-drowdown-multy__input-helpertext-type-short">
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default MyDropDownMulty;
