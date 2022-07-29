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

export {
  IUser,
  IUserPayload,
};