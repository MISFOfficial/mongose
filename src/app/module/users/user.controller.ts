import { Request, Response } from "express";
import { createUserToDB } from "./user.service";

const userController = async (req: Request, res: Response) => {
  const user = await createUserToDB();
  res.send({
    status: "success",
    data: user,
  });
};

// Route --> Controller --> Services
