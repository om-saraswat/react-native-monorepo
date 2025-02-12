# Understanding State in React Native

## Introduction to State
State is a fundamental concept in React and React Native that allows components to manage and respond to dynamic data. Unlike props, which are immutable, state enables a component to track and update information over time.

### What is State?
- State represents mutable data that a component can manage internally.
- Changes in state trigger re-renders, updating the UI automatically.
- State is local to the component where it is declared.
- It helps manage dynamic content and user interactions.

## How State Works
State is typically managed using the `useState` hook in functional components or `this.state` in class components.

### Example Usage of State
Let's consider a simple example where a button click updates a state variable.

```jsx
import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Count: {count}</Text>
      <Button title='Increment' onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
```

### Explanation:
1. The `App` component initializes a state variable `count` with an initial value of `0`.
2. The `setCount` function updates the `count` value when the button is pressed.
3. Every state update causes the component to re-render, reflecting the new value on the UI.

## Different Types of State
State can be categorized into different types depending on how it is managed.

### 1. Local State
- State that exists only within a specific component.
- Example: Managing a form input, toggling UI elements.

### 2. Global State
- State shared across multiple components.
- Managed using tools like Context API, Redux, or React Query.

### 3. Server State
- Data fetched from an API that needs to be stored and updated.
- Often managed using libraries like React Query or SWR.

### 4. URL State
- State that exists in the URL, such as query parameters.
- Useful for filtering or pagination.

## Key Points about State
- State is mutable and can be changed using `setState` or `useState`.
- State updates trigger re-renders, updating the UI dynamically.
- State is local to the component unless lifted or managed globally.
- Proper state management improves performance and user experience.




# Understanding Props in React Native

## Introduction to Props
Props (short for "properties") are an essential concept in React and React Native. They allow data to be passed from a parent component to a child component, making components reusable and dynamic.

### What are Props?
- Props are immutable data that a parent component passes to a child component.
- They help in rendering dynamic content in components.
- Unlike state, props cannot be modified within the component that receives them.
- Props are read-only and ensure that components behave in a predictable manner.

## How Props Work
Props are passed as attributes to components. In a functional component, props are received as function parameters.

### Example Usage of Props
Let's consider a simple example where a parent component passes props to a child component.

```jsx
import { Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState("Om");

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Props in RN</Text>
      <Button title='Press me' onPress={() => setName("Peter")} />
      <User name={name} age={20} />
    </View>
  );
};

interface UserProps {
  name: string;
  age: number;
}

const User = (props: UserProps) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Name: {props.name}</Text>
      <Text style={{ fontSize: 30 }}>Age: {props.age}</Text>
    </View>
  );
};

export default App;
```

### Explanation:
1. The `App` component maintains a state variable `name` and initializes it with "Om".
2. The `User` component receives `name` and `age` as props from the `App` component.
3. When the button is pressed, the `setName` function updates the name, which triggers a re-render and passes the new name to the `User` component.

### Passing Multiple Props
Props can be used to pass multiple types of data such as strings, numbers, booleans, objects, and even functions.

```jsx
const Profile = (props) => {
  return (
    <View>
      <Text>Name: {props.user.name}</Text>
      <Text>Age: {props.user.age}</Text>
      <Text>Active: {props.isActive ? 'Yes' : 'No'}</Text>
    </View>
  );
};

const App = () => {
  const userInfo = { name: "John", age: 25 };

  return <Profile user={userInfo} isActive={true} />;
};
```

## Key Points about Props
- Props allow data to flow from parent to child.
- Props are immutable and cannot be changed within the child component.
- They help make components reusable and dynamic.
- Props can be objects, arrays, functions, and even other components.

## Difference Between State and Props
| Feature   | Props  | State  |
|-----------|--------|--------|
| Definition | Props are read-only data passed from a parent to a child component. | State is a local component’s internal data that can change over time. |
| Mutability | Immutable (cannot be changed by the child component). | Mutable (can be changed using `setState` or hooks like `useState`). |
| Scope | Available to child components when passed. | Exists only in the component where it is declared. |
| Usage | Used to pass data and event handlers to child components. | Used for managing dynamic component behavior. |
| Example Usage | `<User name="John" age={25} />` | `const [count, setCount] = useState(0);` |

### When to Use Props vs. State
- Use **props** when you want to pass data down to a child component that should not change.
- Use **state** when you need to manage and update data within a component dynamically.

By understanding props and state, you can build efficient, reusable, and dynamic components in React Native.

