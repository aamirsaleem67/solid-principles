export class Order {
  id: number;
  tax: number;

  constructor(
    public userId: number,
    public items: { productId: number, price: number, quantity: number }[],
  ) {
    this.id = Math.random();
    this.tax = 0;
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

