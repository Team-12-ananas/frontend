import { Chip } from "@mui/joy";
import { SyntheticEvent } from "react";
import "./MyChipsField.scss";

interface IProps {
  chipsData: string[];
  onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) => void;
  value: string[];
}

const MyChipsField: React.FC<IProps> = ({ chipsData, value, onChange }) => {
  const chipsElement = chipsData.map((item, index) => (
    <Chip
      key={index}
      className="my-chips-field__input-chip"
      variant="outlined"
      color="primary"
      onClick={(e) =>
        onChange(e, value.includes(item) ? value : [...value, item])
      }
    >
      {item}
    </Chip>
  ));

  return <div className="my-chips-field__chips">{chipsElement}</div>;
};

export default MyChipsField;
