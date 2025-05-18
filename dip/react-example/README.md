# Dependency Inversion Principle (DIP) in React

A comment system demo showcasing DIP in React with edit, pin, and delete functionality.

## Key Concepts

- **High-level components** (Comment, CommentMenu) depend on abstractions, not implementations
- **Low-level components** (EditOption, PinOption, DeleteOption) implement interfaces
- **Dependency Injection** passes actions through props rather than direct imports
- **Abstractions** (CommentActionItem) provide the contract between components

## Running the Example

```
npm install
npm start
```

## Implementation Highlights

- Menu options accept a common interface with comment data and actions
- Components are isolated, testable, and interchangeable
- Pinned comments automatically sort to the top 