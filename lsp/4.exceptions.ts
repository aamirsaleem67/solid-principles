class PaymentException extends Error {}
class CardDeclinedException extends PaymentException {}
class NetworkException extends Error {}

class PaymentProcessor {
  processPayment(amount: number): void {
    if (amount > 1000) {
      throw new PaymentException("Amount too large");
    }
    console.log("Payment processed:", amount);
  }
}

// ✅ Subclass → throws same exception → OK
class SafeCardPaymentProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    if (amount > 1000) {
      throw new PaymentException("Card limit exceeded");
    }
    console.log("Card payment processed:", amount);
  }
}

// ✅ Subclass → throws more specific exception → OK
class CardPaymentProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    if (amount > 1000) {
      throw new CardDeclinedException("Card declined");
    }
    console.log("Card payment processed:", amount);
  }
}

// ❌ Subclass → throws unrelated exception → BAD
class NetworkPaymentProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    throw new NetworkException("Network down");
  }
}

// ✅ Client code
function runProcessors() {
  const processors: PaymentProcessor[] = [
    new PaymentProcessor(),
    new SafeCardPaymentProcessor(),
    new CardPaymentProcessor(),
    new NetworkPaymentProcessor(),  // ❌ This will cause uncaught exception
  ];

  for (const processor of processors) {
    try {
      processor.processPayment(600);
    } catch (err) {
      if (err instanceof PaymentException) {
        console.log("Payment failed (Expected):", err.message);
      } else {
        console.log("❌ Unexpected exception (LSP violated):", err);
      }
    }
  }
}

runProcessors();
