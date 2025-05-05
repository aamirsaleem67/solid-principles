// ✅ Parent class
class UserRepository {
    getUserName(id: number): string {
        return `User${id}`;  // ✅ Always returns non-empty string → Postcondition → must not be empty
    }
}

// ✅ Subclass → stronger postcondition → OK
class VerifiedUserRepository extends UserRepository {
    getUserName(id: number): string {
        return `VerifiedUser${id}`;  // ✅ Stronger → still non-empty
    }
}

// ❌ Subclass → weaker postcondition → BAD
class NullableUserRepository extends UserRepository {
    getUserName(id: number): string {
        if (id < 2) {
            return "";  // ❌ BAD → weaker postcondition → returns empty string → violates LSP
        }
        return `User${id}`;
    }
}

// ✅ Client code
function printUserName(repo: UserRepository) {
    const username = repo.getUserName(1);

    if (!username) {
        console.log("❌ Error: User name is empty → LSP violation");
    } else {
        console.log("Username fetched →", username);
    }
}

console.log("Using UserRepository:");
printUserName(new UserRepository());  // ✅ OK

console.log("\nUsing VerifiedUserRepository:");
printUserName(new VerifiedUserRepository());  // ✅ OK

console.log("\nUsing NullableUserRepository:");
printUserName(new NullableUserRepository());  // ❌ BAD → violates postcondition → username can be empty
