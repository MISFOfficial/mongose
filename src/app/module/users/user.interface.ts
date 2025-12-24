export interface IUser {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: "male" | "female";
  email: string;
  password: string;
}
