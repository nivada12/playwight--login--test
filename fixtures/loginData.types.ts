export type LoginData = {
  validUser: {
    username: string;
    password: string;
  };
  invalidUser: {
    username: string;
    password: string;
  };
};
