interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

interface IUserPayload {
  username: string;
  classe: string;
  level: number;
}

interface IUserLogin {
  username: string;
  password: string;
}

export {
  IUser,
  IUserPayload,
  IUserLogin,
};