# Dependency Inversion Principle (DIP) in React

This example demonstrates how to apply the Dependency Inversion Principle in a React application using a comment system with a three-dot menu that provides edit, pin, and delete options.

## Key Components

### Interfaces (Abstractions)
- `Comment`: The data interface for our comment structure
- `CommentService`: Service interface defining operations on comments
- `MenuOptionContext`: Context interface for passing data to menu options

### High-level Components
- `Comment`: Renders a comment with its menu
- `CommentMenu`: Manages the three-dot menu and option selection
- `App`: The main application component

### Low-level Components
- Menu options:
  - `EditOption`: For editing comment text
  - `PinOption`: For pinning/unpinning comments
  - `DeleteOption`: For deleting comments
- `CommentServiceImpl`: Concrete implementation of the CommentService interface

## How DIP is Applied

1. **Abstractions**: Both high-level and low-level components depend on abstractions (interfaces), not on concrete implementations.

2. **Dependency Injection**: The CommentService is created at the App level and injected down the component hierarchy.

3. **Pluggable Components**: Each menu option is a separate component that depends on the MenuOptionContext interface, making them interchangeable and isolated from each other.

4. **Testable Code**: By depending on interfaces, components can be easily tested with mock implementations.

## Running the Example

1. Make sure you have Node.js installed
2. Install dependencies: `npm install`
3. Start the application: `npm start`

## Understanding the Code

The application demonstrates how to structure React components to respect the Dependency Inversion Principle. The menu options depend on the abstraction (MenuOptionContext) rather than on concrete implementations, allowing for flexibility and testability.

This example shows that DIP is not limited to backend development but is also applicable to frontend architecture. 