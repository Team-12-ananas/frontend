interface IUser {
  id: number;
  name: string;
  favoriteStudents: number[];
}

let users: IUser[] = [
  {
    id: 1,
    name: "Константин Константинов",
    favoriteStudents: [1, 2, 3],
  },
  {
    id: 2,
    name: "Константин Константинов",
    favoriteStudents: [3, 4],
  },
];

export const getUsers = (): Promise<IUser[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 10);
  });
};

export const getUserById = (id: number): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const vacancy = users.find((item) => item.id === id);
      if (vacancy) resolve(vacancy);
      else reject("Не найдено в базе");
    }, 10);
  });
};

export const getUserFavoriteById = (id: number): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const vacancy = users.find((item) => item.id === id);
      if (vacancy) resolve(vacancy.favoriteStudents);
      else reject("Не найдено в базе");
    }, 10);
  });
};

export const removeUserFavoriteById = (
  idUser: number,
  idStudent: number
): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users = users.map((item) =>
        item.id === idUser
          ? item.favoriteStudents.filter((id) => idStudent !== id)
          : item
      ) as IUser[];
      const user = users.find((item) => item.id === idUser);
      if (user) resolve(user.favoriteStudents);
      else reject("Не найдено в базе");
    }, 10);
  });
};

export const addUserFavoriteById = (
  idUser: number,
  idStudent: number
): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((item) => item.id === idUser);
      user?.favoriteStudents.push(idStudent);
      if (user) resolve(user.favoriteStudents);
      else reject("Не найдено в базе");
    }, 10);
  });
};
