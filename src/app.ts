import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./app/module/users/user.route";

const app: Application = express();
app.use(cors());

// inseting a test data in the mongobd
// step 1 interface
// step 2 schema
// step 3 model
// step 4 data base query

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoute);
app.use("/api/v1/user", userRoute);

/**
 * interface -0-> interfce.ts
 * schema, model --> model.ts
 * route function -->controller.ts
 *
 * database query --> services.ts
 *
 */

export default app;
