
/** 
 * OrderService (High-level module → Business logic)
 *         ↓ depends on
 * ILogger (Abstraction / Interface)
 *         ↑ implemented by
 * ConsoleLogger, FileLogger (Low-level modules → Implementations)
 */

// ✅ Abstraction
interface ILogger {
    log(message: string): void;
}

// ✅ Low-level → implements abstraction
export class ConsoleLogger implements ILogger {
    log(message: string) {
        console.log("ConsoleLogger:", message);
    }
}

// ✅ High-level → depends on abstraction only
export class OrderService {
    constructor(private logger: ILogger) {}  // ✅ Depends on ILogger → clean

    createOrder() {
        this.logger.log("Order has been created");
    }
}

// ✅ Client code → inject any logger
const logger = new ConsoleLogger();
const service = new OrderService(logger);
service.createOrder();
