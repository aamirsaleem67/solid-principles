import { EmailSender, GoodEmployee, SalaryCalculator, SalaryReport } from "./employee";

const employee = new GoodEmployee("John Doe", 45, 100, "john.doe@example.com");
const salaryCalculator = new SalaryCalculator();
const reportGenerator = new SalaryReport();
const emailSender = new EmailSender();

const salary = salaryCalculator.calculateSalary(employee);
const report = reportGenerator.generateSalaryReport(employee, salary);
emailSender.send(employee.email, report);
