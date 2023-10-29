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

const vacancies: JobPostRequest[] = [
  {
    name: "Разработчик JavaScript",
    description:
      "Ищем опытного разработчика на JavaScript для работы над крупным веб-проектом.",
    min_salary: "100000",
    max_salary: "150000",
    phone: "+7 (123) 456-78-90",
    email: "hr@company.com",
    specialty: "IT",
    specializationType: "Полная занятость",
    education: "Высшее",
    projectActivities:
      "Разработка клиентской части веб-приложения, работа с фреймворками.",
    keySkills: ["JavaScript", "React", "Redux"],
    employmentType: ["Полная занятость", "Контракт"],
    jobExpirience: "3-5 лет",
    city: "Москва",
    id: 1,
    archive: false,
    base: [1, 2],
    favorities: [1, 2],
  },
  {
    name: "Инженер-программист",
    description:
      "Требуется инженер-программист для работы над встраиваемым программным обеспечением.",
    min_salary: "80000",
    max_salary: "120000",
    phone: "+7 (321) 654-98-76",
    email: "jobs@tech.com",
    specialty: "Разработка ПО",
    specializationType: "Полная занятость",
    education: "Высшее техническое",
    projectActivities: "Разработка и тестирование встраиваемого ПО.",
    keySkills: ["C/C++", "RTOS", "Embedded Systems"],
    employmentType: ["Полная занятость"],
    jobExpirience: "1-3 года",
    city: "Санкт-Петербург",
    archive: true,
    id: 2,
    base: [3, 4],
    favorities: [3, 4],
  },
];

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
};
