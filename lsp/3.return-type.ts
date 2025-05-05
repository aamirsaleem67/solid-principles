/**
 * Bad example: return type does not contain all the properties of the parent class
 *
class UserManager {
    process() {
        return {
            id: 1,
            email: 'test@test.com'
        }
    }
}

class AdminUserManager extends UserManager {
    process() {
        return {
            id: 1,
        };
    }
}

// ✅ Client code
const userManager = new AdminUserManager();
const user = userManager.process();
console.log(user.email);
*/

/**
 * Good example: although return type is different but it's super set of the parent class

class UserManager {
    process() {
        return {
            id: 1,
            email: 'test@test.com'
        }
    }
}

class AdminUserManager extends UserManager {
    process() {
        return {
            id: 1,
            email: 'test@test.com',
            permissions: ['read', 'write'],
        }
    }
}

// ✅ Client code
const userManager = new AdminUserManager();
const user = userManager.process();
*/