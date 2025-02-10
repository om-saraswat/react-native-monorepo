# React Native: State vs Variable

## Introduction
In React Native, managing data dynamically within a component is crucial for building responsive applications. Developers commonly use **state** and **variables** to handle data, but understanding their differences is essential for effective coding. This document explains **state** and **variables** in React Native, highlights their key differences, and reveals some hidden insights.

---

## What is a Variable?
A **variable** in React Native (or JavaScript in general) is a way to store temporary data that can be changed or reassigned during the component's lifecycle. Variables are not reactive, meaning changes to them do not trigger a re-render of the component.

### Example of a Variable:
```javascript
let count = 0;
count += 1; // This changes the value, but the UI won't update automatically.
```

### Key Points about Variables:
- Stored in memory and can be reassigned.
- Changes do not cause the component to re-render.
- Best used for non-UI affecting logic.
- Typically declared using `let` or `const`.

---

## What is State?
**State** in React Native is an object that determines how a component renders and behaves. When state changes, the component automatically re-renders to reflect the new data.

### Example of State:
```javascript
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;
```

### Key Points about State:
- Managed using `useState` in functional components.
- Causes re-renders when updated.
- Preserved across renders (unlike regular variables).
- Can be passed as props to child components.
- Stored within the component instance.

---

## Differences between State and Variable
| Feature        | Variable (`let` / `const`) | State (`useState`) |
|---------------|-------------------------|-----------------|
| **Reactivity** | Not reactive | Reactive (causes re-renders) |
| **Persistence** | Lost on re-render | Preserved across renders |
| **Updates UI** | No | Yes |
| **Best For** | Temporary values, calculations | Dynamic UI updates |
| **Mutability** | Directly modified | Updated via `setState` |

---

## Hidden Insights & Best Practices
### 🔹 Use State When UI Should Change
If a value affects what the user sees on the screen, store it in **state** instead of a normal variable.

### 🔹 Avoid Unnecessary State Usage
Not all values need to be in state. If a value does not require reactivity, use a simple variable to avoid unnecessary re-renders.

### 🔹 Never Modify State Directly
Instead of doing:
```javascript
state.count += 1; // ❌ Wrong! React won't detect this change.
```
Always use the setter function:
```javascript
setCount(prevCount => prevCount + 1); // ✅ Correct!
```

### 🔹 State Updates are Asynchronous
State updates do not happen immediately. Always use the function callback pattern if updating based on the previous state:
```javascript
setCount(prevCount => prevCount + 1);
```

### 🔹 Use `useRef` for Persistent Variables Without Re-rendering
If you need a value that persists across renders but does not cause re-renders, use `useRef`:
```javascript
const counterRef = useRef(0);
counterRef.current += 1;
```

---

#

## Conclusion
- **Use state** when you need to keep track of changing values in your app.
- **Do not modify state directly**; always use `setState` or `useState`.
- **Variables won't trigger UI updates**, but **state will**.

This project is a simple yet effective way to learn and implement state management in React Native. 🚀

