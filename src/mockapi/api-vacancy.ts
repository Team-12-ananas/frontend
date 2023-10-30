import { VACANCY__INITIAL } from "../constants/ConstansApiVacancy";

export interface JobPostRequest {
  name: string;
  description: string;
  min_salary: string;
  max_salary: string;
  phone: string;
  email: string;
  specialty: string;
  specializationType: string;
  education: string;
  projectActivities: string;
  keySkills: string[];
  employmentType: string[];
  jobExpirience: string;
  city: string;
  archive?: boolean;
  id?: number;
  base?: number[];
  favorities?: number[];
}

const vacancies: JobPostRequest[] = [...VACANCY__INITIAL];

const generateUniqueId = (): number => {
  let id = 1;
  while (vacancies.some((job) => job.id === id)) {
    id++;
  }
  return id;
};

const addVacancy = (vacancy: unknown): Promise<JobPostRequest> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = generateUniqueId();
      const vacancyWithIdAndArchive = {
        ...(vacancy as JobPostRequest),
        archive: false,
        id,
        base: [],
        favorities: [],
      };
      vacancies.push(vacancyWithIdAndArchive);
      resolve(vacancyWithIdAndArchive);
    }, 200);
  });
};

const editVacancy = (id: number, vacancy: unknown): Promise<JobPostRequest> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentVacancy = vacancies.find((item) => item.id === id);
      if (!currentVacancy) reject("Не найдено в базе");
      const index = vacancies.indexOf(currentVacancy!);
      console.log(vacancies[index]);
      vacancies[index] = {
        ...(vacancy as JobPostRequest),
        id: vacancies[index].id,
        base: vacancies[index].base,
        favorities: vacancies[index].favorities,
        archive: vacancies[index].archive,
      } as JobPostRequest;
      resolve(vacancy as JobPostRequest);
    }, 200);
  });
};

const getVacancies = (): Promise<JobPostRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vacancies);
    }, 200);
  });
};

const getVacancyById = (id: number): Promise<JobPostRequest> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const vacancy = vacancies.find((item) => item.id === id);
      if (vacancy) resolve(vacancy);
      else reject("Не найдено в базе");
    }, 200);
  });
};

const archiveVacancy = (id: number): Promise<JobPostRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      vacancies.find((item) => item.id === id)?.archive === true;
      resolve(vacancies);
    }, 200);
  });
};

const addStudentToFavorite = (
  id: number,
  studentId: number
): Promise<JobPostRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      vacancies.find((item) => item.id === id)?.favorities?.push(studentId);
      resolve(vacancies);
    }, 200);
  });
};

export {
  getVacancies,
  addVacancy,
  archiveVacancy,
  getVacancyById,
  addStudentToFavorite,
  editVacancy,
};
