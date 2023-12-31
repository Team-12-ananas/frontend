import { Checkbox, List, ListItem, Typography } from "@mui/joy";
import { SyntheticEvent } from "react";

interface IProps {
  value: string[];
  onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) => void;
  data: string[];
  label?: string;
}

const MyCheckBoxMulty: React.FC<IProps> = ({
  value,
  onChange,
  data,
  label,
}) => {
  return (
    <div role="group" aria-labelledby="type-of-employment">
      <Typography level="body-sm" fontWeight="md" mb={1}>
        {label}
      </Typography>
      <List size="sm">
        {data.map((item, i) => (
          <ListItem key={i}>
            <Checkbox
              label={item}
              variant="outlined"
              checked={value.includes(item)}
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
