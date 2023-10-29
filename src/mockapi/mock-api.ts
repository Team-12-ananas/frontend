/* interface JobPostRequest {
  name: { value: string };
  description: { value: string };
  min_salary: { value: string };
  max_salary: { value: string };
  phone: { value: string };
  email: { value: string };
  specialty: { value: string };
  specializationType: { value: string };
  education: { value: string };
  projectActivities: { value: string };
  keySkills: { value: string[] };
  employmentType: { value: string[] };
  jobExpirience: { value: string };
  city: { value: string };
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

const addVacancy = (
  vacancy: Omit<JobPostRequest, "id">
): Promise<JobPostRequest> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = generateUniqueId();
      const vacancyWithIdAndArchive = { ...vacancy, archive: false, id };
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

const archiveVacancy = (id: number): Promise<JobPostRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      vacancies.find((item) => item.id === id)?.archive === true;
      resolve(vacancies);
    }, 1000);
  });
};

export { getVacancies, addVacancy, archiveVacancy }; */

/* interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

const getUserById = (id: number): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find((user) => user.id === id));
    }, 1000);
  });
};

export { getUsers, getUserById }; */
