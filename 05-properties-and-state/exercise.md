# Properties and State

## Overview
In this lab, you'll enhance the "library" web page from the previous lab in two ways:
- You'll add stateful behavior to the web application, so that users can "like" the web page. You will hold the number of likes in mutable state.
You can either choose to implement your components as class-based components or as functional components. We provide starter code and solutions for both techniques.



## Roadmap
Here's a brief summary of the exercises in this lab. More detailed instructions follow later in this lab document:

1. Familiarization with the 'solution' web pages
2. Getting started with the 'student' web page
3. Adding stateful behavior to the web application
4. Enhancing ItemsList with Stateful Ordering
5. (If time permits) Defining a Library component
6. (If time permits) Make tabularFormat stateful

### Exercise 1: Familiarization with the 'solution' web pages
Open the following web page in a browser:
- `solution/index.html`

The UI is slightly different than before. Note the following points:
- The web page only displays tabular info in this screenshot. In fact, we've wrapped the UI in a `<Library>` component, and this component receives a `tabularFormat` property. If this property is true, the `<Library>` component renders books and films as HTML tables, otherwise it renders the books and films as HTML lists.
- At the bottom of the web page, there's a panel that allows the user to "like" the web site. Click the Like button to increment the number of likes, or click the Reset like count button to reset the number of likes to 0. The web application remembers the current number of likes in mutable state.

### Exercise 2: Getting started with the 'student' web page
Now go to the student folder and open the following web page in a text editor:
- `student/index.html`
This file is the same as the solutions from the previous lab. Take a moment to get familiar with the code.

### Exercise 3: Adding stateful behavior to the web application
Define a new component named `LikePanel`, to allow the user to "like" your web site.
Hints and requirements:
- The `LikePanel` component needs to maintain the likes count in mutable state.
- When the user clicks the Like button, increment the likes count in mutable state.
- When the user clicks Reset like count, reset the likes count to 0 in mutable state.
Remember to render `LikePanel` as part of the overall web application. When you've done all this, open the web page in a browser and verify it all works.

### Exercise 4: Enhancing ItemsList with Stateful Ordering
Refactor the ItemsList component to manage the ordered property as a state variable, giving users the ability to toggle between an ordered list (<ol>) and an unordered list (<ul>).
- Start by analyzing the current ItemsList component which uses a prop to determine if the list is ordered.
- Modify the ItemsList component to use the useState hook to manage whether the list is ordered or unordered.
- Initialize the ordered state to true to default to an ordered list.
- Add a button within the ItemsList component that, when clicked, toggles the ordered state between true and false.
- Use conditional rendering to switch between rendering an <ol> tag for an ordered list and a <ul> tag for an unordered list based on the state.
- Ensure that each list item is rendered with a unique key prop for React to manage the list efficiently.
- Test the ItemsList component to ensure that clicking the button toggles between ordered and unordered list styles.

### Exercise 5 (If time permits): Defining a Library component
Refactor the web page so that the overall UI is rendered by a `Library` component, as follows:
- The `Library` component needs 3 properties:
  - `books` - an array of books to display (required)
  - `films` - an array of films to display (required)
  - `tabularFormat` - an optional bool indicating whether to display tabular data
- The component renders the books and films as HTML tables (if the `tabularFormat` property is true) or as HTML lists otherwise.

### Exercise 6 (If time permits): Make tabularFormat stateful
Refactor the library component, so that rather than passing a prop for the tabularFormat, you manage that within the component.
- Remove the tabularFormat prop
- Inside the Library component, initialize a state variable called tabularFormat using the useState hook with an initial value of true.
- Implement a toggleView function within the Library component that toggles the value of tabularFormat.
- Use a button in your Library component's return statement to allow users to toggle between views. The button text should change based on the current view (e.g., "Show as List" when in table view and "Show as Table" when in list view).
- Conditionally render either the <Table> or <ItemsList> components based on the current value of tabularFormat.
- Ensure that the LikePanel component is displayed in both views.
- Replace the static library JSX with the new Library component in your application's root render method.
- Test your application to ensure that the toggle button correctly switches between the list and table views and that the state updates accordingly.
