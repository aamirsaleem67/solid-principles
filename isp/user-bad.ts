// ❌ Bad → Huge interface → controllers depend on everything
interface IUserService {
    getUser(): void;
    createUser(): void;
    deleteUser(): void;
    updateUser(): void;
    resetPassword(): void;
}

export class UserService implements IUserService {
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

export class TokenService {
    constructor(private userService: IUserService) {}

    verifyToken(token: string): boolean {
        const user = this.userService.getUser();
        return true;
    }
}

// ✅ client code
const userService = new UserService();
const tokenService = new TokenService(userService);
console.log("token verified", tokenService.verifyToken("123"));



