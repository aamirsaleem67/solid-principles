export class Employee {
  constructor(
    public name: string,
    public hours: number,
    public rate: number,
    public email: string
  ) {}

  calculateSalary(): number {
    const base = this.hours * this.rate;
    const overtime = this.hours > 40 ? (this.hours - 40) * this.rate * 1.5 : 0;
    return base + overtime;
  }

  generateSalaryReport(employee: any, salary: number): string {
    return `Employee: ${employee.name}\nSalary: $${salary}`;
  }

  sendSalaryEmail(email: string, report: string): void {
    console.log(`Sending salary email to ${email}...\n${report}`);
  }
}
