import { Order } from "./order";
import { TaxCalculator } from "./taxCalculator";
import { TaxCalculatorFactory } from "./taxCalculatorFactory";
import { User } from "./user";

const user = new User(1, "John", "john@example.com", "UK");

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const order = new Order(user.id, [
  { productId: 1, price: 100, quantity: 1 },
  { productId: 2, price: 200, quantity: 1 },
]);

const taxCalculator = TaxCalculatorFactory.getTaxCalculatorInstance(user.countryCode);
order.tax = taxCalculator.calculateTax(order, user);

console.log(order);