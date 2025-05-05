interface IUserReader {
    getUser(): void;
}

interface IUserWriter {
    createUser(): void;
    deleteUser(): void;
    updateUser(): void;
}

interface IUserPasswordResetter {
    resetPassword(): void;
}

export class UserService implements IUserReader, IUserWriter, IUserPasswordResetter {
    getUser(): void {
        console.log("User");
    }

    createUser(): void {
        console.log("User created");
    }

    deleteUser(): void {
        console.log("User deleted");
    }

    updateUser(): void {
        console.log("User updated");
    }

    resetPassword(): void {
        console.log("Password reset");
    }
}

// ✅ TokenService depends only on IUserReader → Clean → ISP respected
class TokenService {
    constructor(private userService: IUserReader) {}

    verifyToken(token: string): boolean {
        this.userService.getUser();
        return true;
    }
}

// ✅ client code
const userService = new UserService();
const tokenService = new TokenService(userService);
tokenService.verifyToken("123");
