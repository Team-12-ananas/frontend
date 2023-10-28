import { Checkbox, List, ListItem } from "@mui/joy";
import { SyntheticEvent } from "react";

interface IProps {
  value: string[];
  onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) => void;
  data: string[];
}

const MyCheckBoxMulty: React.FC<IProps> = ({ value, onChange, data }) => {
  return (
    <div role="group" aria-labelledby="type-of-employment">
      <List size="sm">
        {data.map((item, i) => (
          <ListItem key={i}>
            <Checkbox
              label={item}
              variant="outlined"
              onChange={(e) => {
                onChange(
                  e,
                  value.includes(item)
                    ? value.filter((elem) => elem !== item)
                    : [...value, item]
                );
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MyCheckBoxMulty;
