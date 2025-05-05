export class Employee2 {
    constructor(
      public name: string,
      public hours: number,
      public rate: number,
      public email: string,
      public grade: string
    ) {}
  
    calculateSalary(): number {
        const base = this.hours * this.rate;
        const overtime = this.hours > 40 ? (this.hours - 40) * this.rate * 1.5 : 0;
        const bonus = this.grade === 'A' ? 1000 : 0;
        return base + overtime + bonus;
    }
        
    generateSalaryReport(employee: any, salary: number): string {
        return `Employee: ${employee.name}\nDepartment: ${employee.department}\nBase Salary: ${salary}`;
    }
  
    sendSalaryEmail(email: string, report: string): void {
        console.log(`Sending salary email to ${email}, cc hr@company.com`);
        console.log(`<h1>Salary Report</h1><p>${report}</p>`);
    }
  }
  