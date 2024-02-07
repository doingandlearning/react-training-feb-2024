# Lab: Using Context and Reducer

## Overview
In this lab, you will enhance the "My Library" web application by introducing advanced React concepts like context and reducers. The focus will be on managing the state more effectively and providing a more structured way to handle the data flow in the application.

## Objectives
1. Implement a context to manage the like counter globally.
2. Use a reducer to define and handle the state and actions related to the library's contents (books and films).

## Roadmap

### Exercise 1: Setting up Context for Like Counter
- Create a `LikeContext` using React's `createContext`.
- Provide this context around your `Library` component in the application's root.
- Modify the `LikePanel` component to consume the `LikeContext` to manage likes.

### Exercise 2: Implementing Reducer for Library Content
- Define a reducer function that manages the state of books and films.
- The reducer should handle actions like `ADD_BOOK`, `REMOVE_BOOK`, `ADD_FILM`, and `REMOVE_FILM`.
- Implement `useReducer` in your `Library` component, replacing the current books and films arrays.

### Exercise 3: Integrating Context and Reducer
- Modify your `Library` component to use the reducer for managing the library's contents.
- Ensure that the `ItemsList` and `Table` components receive their data from the reducer's state.

### Exercise 4: Adding Functionality to Modify Library Contents
- Implement UI elements to add and remove books and films (just buttons with set values for now)
- Dispatch appropriate actions from these UI elements to update the state through the reducer.

### Exercise 5: Refining the Application
- Ensure all components are correctly using the `LikeContext` and the reducer.
- Test the application thoroughly to make sure all features (like toggling, adding/removing items, liking the library) work as expected.

### Exercise 6: Advanced Feature Implementation (Optional)
- Implement additional features such as editing existing books or films, or sorting the lists.
- Explore the use of `useEffect` for any side effects that need to be handled in the application.

## Conclusion
Upon completion of this lab, you will have a robust and efficiently managed React application. You'll gain hands-on experience with Context and Reducers, enhancing your understanding of advanced React patterns and state management.