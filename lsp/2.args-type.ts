interface User {
    id: number;
    email: string;
};

interface AdminUser extends User {
    permissions: string[];
};

export class UserManager {
    process(user: User): { id: number } {
      return {
        id: user.id,
      }
    }
}

// ❌ Subclass → accepts more specific type (AdminUser) → BAD → violates LSP
export class AdminUserManager extends UserManager {
    process(user: AdminUser): { id: number, permissions: string[] } {
        return {
            id: user.id,
            permissions: ['read', 'write'],
        }
    }
}

// ✅ Client code
const userManager = new AdminUserManager();

// ❗ Problem → Client can only pass AdminUser here
// ❗ If this reference was UserManager this would break because User does not have `permissions`
const user = userManager.process({
    id: 1,
    email: 'test@test.com',
    permissions: ['read', 'write'],
});

console.log(user);

// potential fix is that either we can change the adminUserManager process method to accept a User or AdminUser
// process (user: User | AdminUser)
// Another is that just modify the User interface to include the permissions property
// interface User {
//     id: number;
//     email: string;
//     permissions?: string[];
// }
