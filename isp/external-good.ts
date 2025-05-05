// ✅ Third-party / External logger → FAT INTERFACE
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

// ✅ Internal small interface → respects ISP
interface ILogger {
    info(msg: string): void;
}

// ✅ Adapter → adapts ExternalLogger to ILogger
export class LoggerAdapter implements ILogger {
    constructor(private logger: IExternalLogger) {}

    info(msg: string) {
        this.logger.info(msg);
    }
}

// ✅ Depends only on clean ILogger → respects ISP
export class UserService {
    constructor(private logger: ILogger) {}

    createUser() {
        this.logger.info("User created");
    }
}

// ✅ client code
const logger = new ExternalLogger();
const loggerAdapter = new LoggerAdapter(logger);
const userService = new UserService(loggerAdapter);
userService.createUser();
