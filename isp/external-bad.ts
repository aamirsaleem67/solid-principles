import { LoggerAdapter } from "./external-good";

// ❌ Third-party lib → Fat interface
interface IExternalLogger {
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}

class ExternalLogger implements IExternalLogger {
    info(msg: string): void {
        console.log(msg);
    }
    debug(msg: string): void {
        console.log(msg);
    }
    warn(msg: string): void {
        console.log(msg);
    }
    error(msg: string): void {
        console.log(msg);
    }
}

// ❌ BAD → using ExternalLogger everywhere → tightly coupled to all methods
class UserService {
    constructor(private logger: IExternalLogger) {}

    createUser() {
        this.logger.info("User created");
        // ❗ depends on full ExternalLogger interface → BAD
    }
}

// ✅ client code
const logger = new ExternalLogger();
const userService = new UserService(logger);
userService.createUser();
