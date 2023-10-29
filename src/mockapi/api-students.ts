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

interface IStudent {
  id: number;
  name: string;
  specialty: string;
  city: string;
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
  aboutMe: string;
}

const students: IStudent[] = [
  {
    id: 1,
    name: "Валентина Коготь",
    specialty: "Дизайнер интерфейсов",
    city: "Москва",
    employmentType: ["Гибридный график"],
    readyToRelocate: true,
    jobExpirience: "1 год",
    achievement: ["Победитель в хакатоне", "Участник конкурсов"],
    telegram: "sweet_bun",
    phone: "+7 954 543-95-54",
    email: "sweetbun@yandex.ru",
    portfolio: [
      {
        name: "Behance",
        src: "https://www.behance.net/andreearobescu",
      },
    ],
    jobExpirienceDescription: [
      {
        name: "Дизайнер интерфейсов (обучение)",
        date: "Октябрь 2022 — Июль 2023",
        organization: "Яндекс Практикум",
        text: "Проекты\nМобильное приложение для онлайн школы Praktika School (ссылка на кейс)\n*Спроектировал дизайн приложения на базе Android\n*Создал подробный UI-kit и интерактивный прототип",
      },
    ],
    skills: [
      "Figma, Photoshop, Illustrator, Tilda",
      "CJM, User Stories, JTBD",
      "Прототипирование",
      "Создание UI-kit, дизайн-системы",
      "Работа с референсами и мудбордом",
      "UX исследования",
      "A/B и коридорные тестирования",
      "Гайдлайны Android / IOS",
      "Теория цвета, типографики, композиции",
      "HTML/CSS",
    ],
    keySkills: [
      "Figma",
      "Гайдлайны IOS",
      "Гайдлайны Android",
      "CJM",
      "Прототипирование",
    ],
    education: [
      {
        name: "Экономист-менеджер",
        type: "Высшее образование",
        data: "2014 (5 лет)",
        organization: "МАТИ имени К.Э. Циолковского",
      },
    ],
    aboutMe:
      "Хочу быть частью продуктовой команды, работать над сложными и интересными задачами, проводить исследования, проектировать интерфейсы, решать проблемы пользователей на благо бизнеса.",
  },
];

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
