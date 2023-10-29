import { STUDENT__INITIAL } from "../constants/ConstansApiStudents";

interface IPortfolio {
  name: string;
  src: string;
}

interface IJobExpirienceDescription {
  name: string;
  date: string;
  organization: string;
  text: string;
}

interface IEducationDescription {
  name: string;
  data: string;
  organization: string;
  type: string;
}

export interface IStudent {
  id: number;
  name: string;
  specialty: string;
  city: string;
  avatar: string;
  employmentType: string[];
  readyToRelocate: boolean;
  achievement: string[];
  jobExpirience: string;
  phone: string;
  email: string;
  telegram: string;
  portfolio: IPortfolio[];
  jobExpirienceDescription: IJobExpirienceDescription[];
  skills: string[];
  keySkills: string[];
  education: IEducationDescription[];
  educationType: string;
  aboutMe: string;
  projects: string;
}

const students: IStudent[] = [...STUDENT__INITIAL];

const getStudents = (): Promise<IStudent[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 1000);
  });
};

const getStudentById = (id: number): Promise<IStudent | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students.find((student) => student.id === id));
    }, 1000);
  });
};

export { getStudents, getStudentById };
