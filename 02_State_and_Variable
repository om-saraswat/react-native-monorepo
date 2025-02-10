# React Native App with State Management

## Introduction
This is a simple React Native app demonstrating the use of **state** in functional components. The app includes a button that updates a name and a variable when clicked. It also showcases how to properly use state in a functional component using `useState`.

## Features
- Displays a name and a variable (`data`) on the screen.
- Provides a button to change the name (`Boss` → `Om`) and update the data (`Box` → `God`).
- Demonstrates the difference between **state** and **variables** in React Native.
- Uses functional components and the `useState` hook.

## Installation
To run this project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/react-native-state-demo.git
   ```
2. Navigate to the project folder:
   ```sh
   cd react-native-state-demo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the app:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS (Mac only)
   ```

## Code Explanation
The main component of this app is `App.js`, where we use **state** to manage dynamic content.

### `App.js` Overview
```javascript
import { Text, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import Companydata from './component/Companydata';

const App = () => {
  const [name, setName] = useState("Boss");
  const [data, setData] = useState("Box");

  function testname() {
    setName("Om");
    setData("God");
    console.log("Name changed!");
  }

  return (
    <View style={{ backgroundColor: '#212121', height: '100%', padding: 20 }}>
      <Text style={{ fontSize: 30, color: '#ffffff', marginBottom: 10 }}>{name}</Text>
      <Text style={{ fontSize: 30, color: '#ffffff', marginBottom: 10 }}>{data}</Text>

      <Button title="Click Me" onPress={testname} />
      <Companydata />
    </View>
  );
};

export default App;
```

## Understanding State in React Native

### What is State?
State is a built-in React object used to store **dynamic data** that affects the UI. When state changes, the component **re-renders**, reflecting the new values in the UI.

### Difference Between Variables and State
| Feature       | Variables (`let`, `const`) | State (`useState`) |
|--------------|------------------|---------------|
| Persistence  | Temporary, resets on re-render | Persists across re-renders |
| UI Updates   | No automatic UI update | Triggers re-render and updates UI |
| Mutability   | Directly modified | Updated via `setState` in class components or `useState` in functional components |
| Example Usage | `let count = 0;` | `const [count, setCount] = useState(0);` |

### How to Use State in Functional Components
```javascript
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent;
```

## Conclusion
- **Use state** when you need to keep track of changing values in your app.
- **Do not modify state directly**; always use `setState` or `useState`.
- **Variables won't trigger UI updates**, but **state will**.

This project is a simple yet effective way to learn and implement state management in React Native. 🚀

