interface JobPostRequest {
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
}

const vacancies: JobPostRequest[] = [];

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
      };
      vacancies.push(vacancyWithIdAndArchive);
      resolve(vacancyWithIdAndArchive);
    }, 1000);
  });
};

const getVacancies = (): Promise<JobPostRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vacancies);
    }, 1000);
  });
};

const getVacancyById = (id: number): Promise<JobPostRequest> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const vacancy = vacancies.find((item) => item.id === id);
      if (vacancy) resolve(vacancy);
      else reject("Не найдено в базе");
    }, 1000);
  });
};

const archiveVacancy = (id: number): Promise<JobPostRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      vacancies.find((item) => item.id === id)?.archive === true;
      resolve(vacancies);
    }, 1000);
  });
};

export { getVacancies, addVacancy, archiveVacancy, getVacancyById };
