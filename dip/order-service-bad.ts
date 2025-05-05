/*
OrderService (High-level module → Business logic)
         ↓ directly depends on
ConsoleLogger (Low-level module → Logging implementation)
*/

class ConsoleLogger {
    log(message: string) {
        console.log("ConsoleLogger:", message);
    }
}

class OrderService {   // High-level
    private logger = new ConsoleLogger();  // ❌ depends on low-level

    createOrder() {
        this.logger.log("Order has been created");
    }
}

const orderService = new OrderService();
orderService.createOrder();
