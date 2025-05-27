import express from "express";
const app = express();


// TODO: this file!
import express from "express";
import employeesRouter from "#api/employees.js";


app.use(express.json()); 
app.use("/api/employees", employeesRouter);

export default app;