export class GoodEmployee {
    constructor(
        public name: string,
        public hours: number,
        public rate: number,
        public email: string
    ) { }
}

export class SalaryCalculator {
    calculateSalary(employee: GoodEmployee): number {
        const base = employee.hours * employee.rate;
        const overtime = employee.hours > 40 ? (employee.hours - 40) * employee.rate * 1.5 : 0;
        return base + overtime;
    }
}

export class SalaryReport {
    generateSalaryReport(employee: GoodEmployee, salary: number): string {
        return `Employee: ${employee.name}\nSalary: $${salary}`;
    }
}

export class EmailSender {
    send(email: string, report: string): void {
        console.log(`Sending salary email to ${email}...\n${report}`);
    }
}