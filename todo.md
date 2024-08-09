

### Exercise 3: Context API Basics
1. **Provide and Consume Context:**
   - Create a parent component that provides a `theme` context (e.g., `'light'` or `'dark'`).
   - Create two child components: one that consumes this context to display the current theme and another that allows switching between themes.

2. **Multiple Contexts:**
   - Extend the previous exercise by providing an additional context for user authentication status (`authenticated: boolean`).
   - Use this context in child components to show different content based on whether the user is authenticated.

### Exercise 4: Advanced Context and Stores
1. **Complex State Management with Context and Stores:**
   - Create a complex app with nested components (e.g., a shopping cart).
   - Use the Context API to provide a store to manage the cart's state.
   - Ensure that components deep in the hierarchy can add items to the cart, remove items, and update quantities.

2. **Combining Context and Custom Stores:**
   - Create a custom store that manages user preferences (e.g., language, theme).
   - Provide this store via context to your app, and allow components to subscribe to the preferences store and update preferences.

### Exercise 5: Real-world Application
1. **Todo App with Context and Stores:**
   - Build a Todo app where you manage the list of todos using a store.
   - Use the Context API to provide the store to the entire application.
   - Implement features like adding, editing, deleting, and filtering todos (e.g., show only completed todos).

2. **Authentication Flow:**
   - Create a basic authentication flow using context and stores.
   - Store the authentication state (e.g., `isAuthenticated`, `user`) in a store.
   - Provide this store via context to manage authentication across the app, showing different routes or content based on the user's authentication status.

### Exercise 6: Performance Considerations
1. **Optimizing Store Usage:**
   - Create an app with multiple components that consume the same store.
   - Optimize the store and context usage to ensure that only the necessary components re-render when the store's state changes.

2. **Lazy Loading Context:**
   - Implement a context provider that lazily loads heavy resources (e.g., fetching data from an API) only when required by child components.

### Exercise 7: Unit Testing and Best Practices
1. **Unit Testing Stores:**
   - Write unit tests for your stores, ensuring they behave as expected (e.g., increment, decrement, and reset behavior for a counter store).
   - Test custom stores with more complex logic.

2. **Testing Context in Components:**
   - Write unit tests for components that consume context.
   - Mock context providers in your tests to isolate component behavior.

---

These exercises will help you deepen your understanding of Svelte's Context API and Stores by gradually building up from simple examples to more complex applications. 

**Suggestions:**

**a.** Implement one of the exercises and ask for feedback or guidance on specific challenges you encounter.  
**b.** Explore performance optimization techniques in Svelte by focusing on how stores and context are used.

Great! Here are some exercises to help you improve your understanding of the Svelte Context API and stores:

### **Exercise 1: Simple Store Implementation**
- **Goal:** Understand how stores work in Svelte.
- **Task:**
  1. Create a new Svelte app.
  2. Implement a basic writable store that holds a counter value.
  3. Create buttons that increment and decrement the counter.
  4. Display the current counter value in a Svelte component.

- **Hints:**
  - Use `writable` from `svelte/store`.
  - Remember to import the store into your component to use it.

### **Exercise 2: Derived Store**
- **Goal:** Learn how derived stores work.
- **Task:**
  1. Create two writable stores: one for `price` and one for `quantity`.
  2. Create a derived store that calculates the total cost based on the `price` and `quantity`.
  3. Create a form where users can input the `price` and `quantity` and display the calculated total cost.

- **Hints:**
  - Use `derived` from `svelte/store`.
  - Ensure that changes to `price` and `quantity` reflect in the total cost.

### **Exercise 3: Context API Basics**
- **Goal:** Learn how to use the Context API for passing data between components.
- **Task:**
  1. Create a parent component that sets a context value (e.g., a user object with `name` and `role`).
  2. Create child components that consume this context to display the user information.

- **Hints:**
  - Use `setContext` in the parent component and `getContext` in the child components.
  - The context value can be an object, a string, or any other data type.

### **Exercise 4: Nested Context Usage**
- **Goal:** Practice using context in a nested component structure.
- **Task:**
  1. Create a parent component that provides a theme (e.g., light or dark) using the Context API.
  2. Create a nested structure with multiple components.
  3. In a deeply nested component, consume the theme context and apply styling based on the provided theme.

- **Hints:**
  - Make sure the context is accessible in the deeply nested component.
  - Use `getContext` in the deeply nested component to retrieve the theme.

### **Exercise 5: Store with Context API**
- **Goal:** Combine the use of stores and Context API.
- **Task:**
  1. Create a writable store that holds the authentication status of a user (`isLoggedIn`).
  2. Provide this store using the Context API in a parent component.
  3. Create multiple child components that consume the store from the context and display content based on whether the user is logged in or not.

- **Hints:**
  - Use `setContext` to provide the store and `getContext` to access it in child components.
  - You can use `$store` in the child components to reactively display different content.

### **Exercise 6: Advanced: Global State Management**
- **Goal:** Practice managing global state using stores and context.
- **Task:**
  1. Create a global store that holds application-wide settings (e.g., language preference, theme).
  2. Use the Context API to make this store accessible throughout the app.
  3. Implement components that allow users to update these settings and observe how changes propagate across the app.

- **Hints:**
  - Consider using a single store object or multiple stores for different settings.
  - Ensure that all components reactively update based on the global state changes.

### **Exercise 7: Combining Stores and Context with Svelte Actions**
- **Goal:** Learn to use Svelte actions with stores and context.
- **Task:**
  1. Create a custom Svelte action that accepts a store as an input.
  2. The action should update the element’s class based on the store’s value (e.g., applying a CSS class for dark mode).
  3. Use the action in a component and observe the changes based on store updates.

- **Hints:**
  - Actions are functions that can take parameters, so you can pass your store as an argument.
  - Use the `update` method within the action to respond to store changes.

These exercises should give you a comprehensive understanding of Svelte’s Context API and stores. Let me know if you need any help with them!