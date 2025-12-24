import express from "express";
import { createUserToDB } from "./user.service";

const router = express.Router();

router.get("/", createUserToDB);

export default router;
