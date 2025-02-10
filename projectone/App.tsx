import { Text, View, Button, Alert } from 'react-native';
import React, { Component ,useState} from 'react';
import Companydata from './component/Companydata';

const App = () => {
  
  
  const fruit = (val :number) => {
    console.log("Value:", val); // Try this
    
  };

  let data = "Box";
  const[name,setName] = useState("Boss");
  function testname() {
      setName("om");
      data = "God";
      console.log("1");
  }

  
    return (
      <View style={{ backgroundColor: '#212121', height: '100%', padding: 20 }}>
        <Text style={{ fontSize: 30, color: '#ffffff', marginBottom: 10 }}>
          {name}
        </Text>

        <Userdata />

        <Button title="Click Me" onPress={() => Alert.alert('Button Pressed')} />
        
        <Userdata />
        
        <Button title="Click Me" onPress={() => testname()} />

        <Companydata /> 
      </View>
    );
  
}

// Functional Component
const Userdata = () => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 20, color: '#ffffff' }}>
        Name: Om Saraswat
      </Text>
      <Text style={{ fontSize: 20, color: '#ffffff' }}>
        Age: 29
      </Text>  
    </View>
  );
};

export default App;
