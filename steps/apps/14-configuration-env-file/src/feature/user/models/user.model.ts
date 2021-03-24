interface ICredentials {
  mail: string;
  password: string;
}

export type Credentials = Readonly<ICredentials>;
