# React Native Revision Guide

## Introduction
This guide covers key React Native concepts, including components, styling, JSX, and various core elements like `View`, `Text`, `Button`, and `Alert`.

---

## 1. JSX (JavaScript XML)
JSX is a syntax extension for JavaScript that allows writing UI components in a way that resembles HTML. React Native uses JSX to define the structure of mobile applications.

Example:
```jsx
<View>
  <Text>Hello, World!</Text>
</View>
```

JSX rules:
- Must return a single root element
- Use `{}` to embed JavaScript expressions inside JSX
- Self-closing tags must end with `/` (e.g., `<Text />`)

---

## 2. Components
React Native applications are built using components. There are two types:
1. **Class Components** (ES6 Classes)
2. **Functional Components** (Simpler, preferred for performance and hooks support)

### Example of a Class Component:
```jsx
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Text>Hello from Class Component</Text>
      </View>
    );
  }
}

export default MyComponent;
```

### Example of a Functional Component:
```jsx
import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Text>Hello from Functional Component</Text>
    </View>
  );
};

export default MyComponent;
```

---

## 3. Core Components
### `View`
A container for UI elements. Similar to a `<div>` in web development.
```jsx
<View style={{ padding: 20 }}>
  <Text>Inside a View</Text>
</View>
```

### `Text`
Displays text on the screen.
```jsx
<Text style={{ fontSize: 20, color: 'blue' }}>Hello, World!</Text>
```

### `Button`
Renders a basic button with an `onPress` event.
```jsx
<Button title="Click Me" onPress={() => Alert.alert('Button Pressed')} />
```

### `Alert`
Displays an alert dialog.
```jsx
Alert.alert("Title", "Message goes here");
```

---

## 4. Styling in React Native
React Native uses JavaScript objects for styling, similar to CSS but with camelCase properties.

### Example:
```jsx
const styles = {
  container: {
    backgroundColor: '#212121',
    height: '100%',
    padding: 10
  },
  text: {
    fontSize: 20,
    color: '#ffffff'
  }
};

<View style={styles.container}>
  <Text style={styles.text}>Styled Text</Text>
</View>
```

**Inline Styles** (Less recommended for large projects):
```jsx
<Text style={{ fontSize: 20, color: 'red' }}>Inline Styled Text</Text>
```

---

## 5. Exporting Components
- Use `export default` for single components in a file.
- Use `export` for named exports.

Example:
```jsx
export default function App() {
  return <Text>Default Export</Text>;
}
```
```jsx
export const MyComponent = () => <Text>Named Export</Text>;
```

---

## 6. Importing Components
```jsx
import App from './App'; // Default Import
import { MyComponent } from './MyComponent'; // Named Import
```

---

## 7. Companydata Component
### Example:
```jsx
import { View, Text } from 'react-native';

const Companydata = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: '#ffffff' }}>
        Name: XYz
      </Text>
      <Text style={{ fontSize: 20, color: '#ffffff' }}>
        Product: ABC
      </Text>  
    </View>
  );
};

export default Companydata;
```

---

## Summary
- JSX is used to structure components.
- `View` is like a `<div>`, `Text` is for displaying text, `Button` for buttons.
- Use `StyleSheet` or inline styles for styling.
- Use class or functional components.
- Use `export default` for single exports and `export` for named exports.
- `Alert.alert()` shows an alert dialog.

This guide helps in revising core React Native concepts quickly. 🚀

