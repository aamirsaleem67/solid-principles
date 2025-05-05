import { Employee } from "./employee";

const employee = new Employee("John Doe", 45, 100, "john.doe@example.com");
// payroll dept
const salary = employee.calculateSalary();
// hr/finance dept
const report = employee.generateSalaryReport(employee, salary);
// communication dept
employee.sendSalaryEmail(employee.email, report);
