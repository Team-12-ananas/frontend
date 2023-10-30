import { IStudent } from "../mockapi/api-students";

export const STUDENT__INITIAL: IStudent[] = [
  {
    id: 1,
    name: "Валентина Коготь",
    avatar:
      "https://gas-kvas.com/uploads/posts/2023-01/1673291820_gas-kvas-com-p-anime-risunki-devochka-s-khvostikom-20.jpg",
    specialty: "Дизайнер интерфейсов",
    city: "Москва",
    employmentType: ["Гибридный график"],
    readyToRelocate: true,
    jobExpirience: "1 год",
    achievement: ["Победитель в хакатоне", "Участник конкурсов"],
    telegram: "sweet_bun",
    phone: "+7 954 543-95-54",
    email: "sweetbun@yandex.ru",
    projects: "Более 3 проектов",
    educationType: "Высшее образование",
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
        text: "Проекты\nМобильное приложение для онлайн школы Praktika School (ссылка на кейс)\n-Спроектировал дизайн приложения на базе Android\n-Создал подробный UI-kit и интерактивный прототип",
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
  {
    id: 2,
    name: "Алексей Петров",
    avatar:
      "https://i2card.ot7.ru/service/uploads/7/1/9/картинка-аватарка-Алексей-Главная-3221326.jpg",
    specialty: "Разработчик веб-приложений",
    city: "Санкт-Петербург",
    employmentType: ["Удаленная работа"],
    readyToRelocate: false,
    jobExpirience: "3 года",
    achievement: ["Сертифицированный разработчик", "Победитель хакатона"],
    telegram: "web_dev_alex",
    phone: "+7 901 234-56-78",
    email: "alexey@example.com",
    projects: "Более 3 проектов",
    educationType: "Высшее образование",
    portfolio: [
      {
        name: "GitHub",
        src: "https://github.com/alexey",
      },
    ],
    jobExpirienceDescription: [
      {
        name: "Full Stack Разработчик",
        date: "Январь 2020 — Декабрь 2022",
        organization: "WebTech Solutions",
        text: "Проекты\nРазработка и поддержка веб-приложений для клиентов\n- Frontend и Backend разработка\n- Интеграция с сторонними API\n- Оптимизация производительности",
      },
    ],
    skills: [
      "JavaScript, React, Node.js",
      "HTML/CSS, Bootstrap",
      "RESTful API, GraphQL",
      "MongoDB, MySQL",
      "Git, GitHub",
      "Jira, Confluence",
    ],
    keySkills: ["React", "Node.js", "RESTful API", "Git"],
    education: [
      {
        name: "Бакалавр по Информационным Технологиям",
        type: "Высшее образование",
        data: "2017 (4 года)",
        organization: "Университет IT",
      },
    ],
    aboutMe:
      "Стремлюсь создавать качественные веб-приложения, готов к сотрудничеству и постоянному обучению. Увлечен передовыми технологиями и легко адаптируюсь к новым задачам.",
  },
  {
    id: 3,
    name: "Мария Иванова",
    projects: "Более 3 проектов",
    educationType: "Высшее образование",
    avatar:
      "https://papik.pro/uploads/posts/2023-03/1677724549_papik-pro-p-krasivie-risunki-na-avatarku-dlya-devochek-27.jpg",
    specialty: "QA Инженер",
    city: "Екатеринбург",
    employmentType: ["Полная занятость"],
    readyToRelocate: true,
    jobExpirience: "2 года",
    achievement: [
      "Сертифицированный QA специалист",
      "Лучший тестировщик месяца",
    ],
    telegram: "qa_maria",
    phone: "+7 987 654-32-10",
    email: "maria@example.com",
    portfolio: [
      {
        name: "LinkedIn",
        src: "https://www.linkedin.com/in/mariaivanova",
      },
    ],
    jobExpirienceDescription: [
      {
        name: "QA Инженер",
        date: "Март 2021 — Февраль 2023",
        organization: "TestTech Corp.",
        text: "Задачи\nТестирование веб-приложений и мобильных приложений\n- Написание тест-кейсов и автотестов\n- Выявление и отслеживание багов\n- Составление отчетов о тестировании",
      },
    ],
    skills: [
      "Manual и автоматизированное тестирование",
      "Selenium, Appium",
      "JIRA, TestRail",
      "API тестирование",
      "SQL, Postman",
    ],
    keySkills: [
      "Manual тестирование",
      "Автоматизация тестирования",
      "Bug tracking",
    ],
    education: [
      {
        name: "Специалист по тестированию ПО",
        type: "Сертификат",
        data: "2020",
        organization: "QA Academy",
      },
    ],
    aboutMe:
      "Профессиональный QA инженер с опытом в ручном и автоматизированном тестировании. Готова к работе в команде для обеспечения качества продукта.",
  },
  {
    id: 4,
    name: "Андрей Сидоров",
    projects: "Более 5 проектов",
    educationType: "Высшее образование",
    avatar:
      "https://tengyart.ru/wp-content/uploads/2020/12/Мужчкой-портрет-и-аватарка-для-инстаграм-в-нейросети-Artbreeder.jpg",
    specialty: "Frontend Разработчик",
    city: "Киев",
    employmentType: ["Удаленная работа"],
    readyToRelocate: false,
    jobExpirience: "4 года",
    achievement: [
      "Создатель популярных веб-приложений",
      "Лауреат веб-конкурсов",
    ],
    telegram: "frontend_andrey",
    phone: "+380 99 876-54-32",
    email: "andrey@example.com",
    portfolio: [
      {
        name: "GitHub",
        src: "https://github.com/andrey",
      },
    ],
    jobExpirienceDescription: [
      {
        name: "Frontend Разработчик",
        date: "Январь 2019 — настоящее время",
        organization: "WebDev Studio",
        text: "Проекты\nРазработка и поддержка веб-приложений и сайтов\n- Frontend разработка с использованием React и Angular\n- Оптимизация производительности и SEO",
      },
    ],
    skills: [
      "JavaScript, React, Angular",
      "HTML/CSS, SASS",
      "RESTful API, GraphQL",
      "Git, Bitbucket",
      "Webpack, Babel",
    ],
    keySkills: [
      "React",
      "Frontend архитектура",
      "Сборка и оптимизация",
      "Git workflow",
    ],
    education: [
      {
        name: "Инженер по информационным технологиям",
        type: "Высшее образование",
        data: "2015 (4 года)",
        organization: "Университет Технологий",
      },
    ],
    aboutMe:
      "Люблю создавать красивые и функциональные веб-приложения. Готов к совместной работе и постоянному обучению, чтобы быть в курсе последних технологий во frontend разработке.",
  },
];
