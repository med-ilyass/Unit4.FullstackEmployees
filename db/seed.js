import db from "./client.js"; // Adjust path if you're using aliases
import { createEmployee } from "./queries/employees.js"; // Adjust path if needed

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const sampleEmployees = [
    { name: "Alice", birthday: "1990-01-01", salary: 60000 },
    { name: "Bob", birthday: "1985-02-15", salary: 55000 },
    { name: "Charlie", birthday: "1992-03-10", salary: 70000 },
    { name: "Diana", birthday: "1994-04-05", salary: 80000 },
    { name: "Eli", birthday: "1980-05-20", salary: 90000 },
    { name: "Fiona", birthday: "1993-06-30", salary: 50000 },
    { name: "George", birthday: "1988-07-25", salary: 75000 },
    { name: "Hannah", birthday: "1991-08-08", salary: 62000 },
    { name: "Ian", birthday: "1995-09-14", salary: 58000 },
    { name: "Jill", birthday: "1987-10-22", salary: 67000 },
  ];

  for (const emp of sampleEmployees) {
    await createEmployee(emp);
  }
}