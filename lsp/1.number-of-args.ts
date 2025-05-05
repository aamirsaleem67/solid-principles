interface IUser {
    id: number;
    email: string;
    permissions: string[];
}

export class User {
    id: number;
    email: string;
    permissions: string[];
    
    process(user: IUser) {
        return {
            id: user.id,
            email: user.email,
            permissions: user.permissions,
        }
    }
}

export class AdminUser extends User {
    // ❌ BAD → process method now requires TWO arguments instead of ONE
    // This makes it incompatible with the parent method signature
    process(user: IUser, isVerified: boolean) {
        return {
            id: user.id,
            email: user.email,
            permissions: isVerified ? user.permissions : [],
        }
    }
}

// ✅ Client code
const user = new AdminUser();

// ❗ Client must now pass additional argument `isVerified`
// ❗ This breaks substitutability → because parent class did NOT require this argument
const processedUser = user.process({
    id: 1,
    email: "test@test.com",
    permissions: ["read", "write"],
}, true);

console.log(processedUser);
