import { Order } from "./order";
import { ITaxCalculator, TaxCalculator } from "./taxCalculator";
import { User } from "./user";

class NoTaxCalculator implements ITaxCalculator {
    calculateTax(order: Order, user: User): number {
        return 0;
    }   
}

class UkTaxCalculator implements ITaxCalculator {
    calculateTax(order: Order, user: User): number {
        const orderTotal = order.calculateTotal();      
        return orderTotal * 0.1;
    }
}

class UsTaxCalculator implements ITaxCalculator {
    calculateTax(order: Order, user: User): number {
        const orderTotal = order.calculateTotal();
        return orderTotal * 0.05;
    }   
}

export class TaxCalculatorFactory {
    static getTaxCalculatorInstance(countryCode: string): ITaxCalculator {
        switch (countryCode) {
            case "UK":
                return new UkTaxCalculator();
            case "US":
                return new UsTaxCalculator();
            default:
                return new NoTaxCalculator();
        }
    }
}