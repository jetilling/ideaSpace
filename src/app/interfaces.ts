export interface ILoginData {
  email: string,
  password: string,
}

export interface ISignupData {
    email: string,
    password: string,
    displayName: string
}

export interface ITokenUser {
  username: string,
  displayName?: string
}

export interface IDBUser extends ITokenUser {
    google?: string;
    hash?: string;
}

export class User {
    id: number;
    username: string;
    password: string;
    displayname: string;
    firstName: string;
    lastName: string;
    token: string;
}
