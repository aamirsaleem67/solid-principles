// ✅ Parent class
class UserFetcher {
    getUser(id: number): string {
        if (id <= 0) {
            throw new Error("Invalid user ID");
        }
        return `User with ID ${id}`;
    }
}

// ✅ Subclass → relaxed precondition → OK
class FlexibleUserFetcher extends UserFetcher {
    getUser(id: number): string {
        return `User with ID ${id}`;
    }
}

// ❌ Subclass → stronger precondition → BAD → violates LSP
class LimitedUserFetcher extends UserFetcher {
    getUser(id: number): string {
        if (id < 1000) {   
            throw new Error("ID must be >= 1000");
        }
        return `User with ID ${id}`;
    }
}

// ✅ Client code
function testFetcher(fetcher: UserFetcher) {
    try {
        console.log(fetcher.getUser(500));  // Valid ID for parent (should work everywhere)
    } catch (err) {
        console.log("❌ Error (LSP broken or stricter subclass):", err.message);
    }
}

console.log("Using UserFetcher:");
testFetcher(new UserFetcher());  // ✅ OK

console.log("\nUsing FlexibleUserFetcher:");
testFetcher(new FlexibleUserFetcher());  // ✅ OK → relaxed precondition → OK

console.log("\nUsing LimitedUserFetcher:");
testFetcher(new LimitedUserFetcher());  // ❌ BAD → throws → LSP violation
