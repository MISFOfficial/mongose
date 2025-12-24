import { User } from "./user.model";

export const createUserToDB = async () => {
  // 4 CREATE instance fo connect to the data base
  const user = new User({
    name: {
      firstName: "manik",
      middleName: "Islam",
      lastName: "tiko",
    },
    gender: "male",
    email: "muksitul44@gmail.com",
    password: "123456789",
  });

  // now save to the data base
  await user.save();
};
