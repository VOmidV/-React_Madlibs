### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JS library for creating user interfaces for web application.

- What is Babel?
Bable is a JS compiler that converts a code from modern JS to an old version of browers.

- What is JSX?
it just allow developer to write their html code in their JS files

- How is a Component created in React?
there is two ways: one to create using function component or class component which in both of it, it returns a React element.

- What are some difference between state and props?
whenever we want to updated a component, we use State but props are external and real only.

- What does "downward data flow" refer to in React?
passing data from a parent component to a child component through props

- What is a controlled component?
component that get its value from props and notifies changes when callbacks

- What is an uncontrolled component?
uncontrolled component manages its own state internally and they are not controlled by a parent component.

- What is the purpose of the `key` prop when rendering a list of components?
it help to identify which items in the list we changed, removed it or added.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

- Describe useEffect.  What use cases is it used for in React components?
is a hook in React that allows functional components to perform side effects

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
creates a mutable reference to a value that does not cause re-renders when changed.

- When would you use a ref? When wouldn't you use one?
Use refs in React for direct access,however avoid for better code quality.

- What is a custom hook in React? When would you want to write one?
A custom hook in React shares reusable logic between components. I will write one when I'm doing the samething in one file wit usestate or in couple of file and do the samething with useState.