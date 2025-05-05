import { Order } from "./order";
import { User } from "./user";

export interface ITaxCalculator {
    calculateTax(order: Order, user: User): number;
}

export class TaxCalculator implements ITaxCalculator {
    calculateTax(order: Order, user: User) {
        const orderTotal = order.calculateTotal();
        let taxRate = 0;
        switch (user.countryCode) {
            case "UK":
                taxRate = 0.1;
                break;
            case "US":
                taxRate = 0.05;
                break;
            default:
                taxRate = 0;
        }

        return orderTotal * taxRate;
    }
}