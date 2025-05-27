
import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee
} from "#db/queries/employees.js";

const router = express.Router();
export default router;

// Get all employees
router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.json(employees);
});

// Get a single employee by ID
router.get("/:id", async (req, res) => {
  const employee = await getEmployee(req.params.id);
  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }
  res.json(employee);
});

// Create a new employee
router.post("/", async (req, res) => {
  const { name, birthday, salary } = req.body;
  const newEmployee = await createEmployee({ name, birthday, salary });
  res.status(201).json(newEmployee);
});

// Update an employee
router.put("/:id", async (req, res) => {
  const { name, birthday, salary } = req.body;
  const updatedEmployee = await updateEmployee({
    id: req.params.id,
    name,
    birthday,
    salary,
  });
  if (!updatedEmployee) {
    return res.status(404).json({ error: "Employee not found" });
  }
  res.json(updatedEmployee);
});

// Delete an employee
router.delete("/:id", async (req, res) => {
  const deletedEmployee = await deleteEmployee(req.params.id);
  if (!deletedEmployee) {
    return res.status(404).json({ error: "Employee not found" });
  }
  res.json(deletedEmployee);
});
