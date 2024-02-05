# Components

1. Overview
2. Class components
3. Functional components

---

# 1. Overview

- The story so far ...
- A mode modular approach ...
- Defining components in React

---

# The story so far ...

The examples so far have created a monolithic dollop of React elements in one giant block of code:

```js
let gamesList = React.createElement('ul', … … … )
let citiesList = React.createElement('ul', … … … )

const retailer = React.createElement('div', null,
   React.createElement('h1', null, 'Catalog'),
   gamesList,
   React.createElement('h1', null, 'Cities'),
   citiesList
)

const root = ReactDOM.createRoor(…)
root.render(retailer)
```

Not feasible in a real application - too much content!

---

# A mode modular approach

Divide-and-conquer

- Partition the UI into a bunch of components
- Each component is responsible for one part of the UI

Benefits of the component approach

- Each component is relatively small and focussed
- Easier to develop
- Potential reuse
- Easier to test

---

# How to define components in React

There are several ways to develop components in React

- Via classes and inheritance - we'll look at this briefly in case you see legacy code that includes it but it's almost never used now.
- Via functional components

In earlier versions or React, you could also create a component using React.createClass()

- But this is deprecated nowadays

---

# 2. Class Components

- Overview
- Example scenario
- Example data
- Component classes in our example
- Creating/rendering the App component

---

# Overview

React has a class named React.Component

- Has common capabilities needed by all components
- E.g. render elements for a component

To define your own component as a class:

- Define a class that inherits from React.Component
- Override render() to render component's elements
- Use this.props to access component's properties

---

# Example scenario

---

# Example data

We'll use our familar game and city list.

---

# Component class in our Example

```js
class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Catalog"),
      React.createElement(ItemsList, { items: games }, null),
      React.createElement("h1", null, "Cities"),
      React.createElement(ItemsList, { items: cities }, null)
    );
  }
}
```

---

# Creating/Rendering the App Component

We create/render the App component as the root React element as follows:

```js
ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById("root")
);
```

---

# 3. Functional Components

- Overview
- Functional components in our example
- Creating/rendering the App component

---

# Overview

Now we're going to see how to define components as functional components

- This is usually simpler than defining class components
- See viaFunctionalComps.html

A functional component:

- Is just a function (i.e. not a class)
- Receives properties as a function parameter (an object)
- Creates/returns a React element, which React will render

---

# Functional components in our example

```js
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Catalog"),
    React.createElement(ItemsList, { items: games }, null),
    React.createElement("h1", null, "Shops"),
    React.createElement(ItemsList, { items: cities }, null)
  );
}
```

```js
function ItemsList(props) {
  return React.createElement(
    "ul",
    null,
    props.items.map((item, i) => React.createElement("li", { key: i }, item))
  );
}
```

---

# Creating/Rendering the App component

We create/render the App component as the root React element as follows (same as before ☺):

```js
ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById("root")
);
```

---

# Summary

- Overview
- Class components
- Functional components
