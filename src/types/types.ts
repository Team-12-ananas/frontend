import { SyntheticEvent } from "react";

export type TEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export type TFieldInput = {
  description: string;
  value: string | string[];
  onChange: (e: TEvent) => void;
};

export type TFieldDrowDownSingle = {
  description: string;
  value: string | null;
  onChange: (
    _: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => void;
};

export type TFieldDrowDownMulty = {
  description: string;
  value: string[];
  onChange: (_: SyntheticEvent<Element, Event>, newValue: string[]) => void;
};

export interface IFormValue {
  name: TFieldInput;
  description: TFieldInput;
  min_salary: TFieldInput;
  max_salary: TFieldInput;
  phone: TFieldInput;
  email: TFieldInput;
  specialty: TFieldDrowDownSingle;
  specializationType: TFieldDrowDownSingle;
  education: TFieldDrowDownSingle;
  projectActivities: TFieldDrowDownSingle;
  keySkills: TFieldDrowDownMulty;
  employmentType: TFieldDrowDownMulty;
  jobExpirience: TFieldInput;
  city: TFieldInput;
}
