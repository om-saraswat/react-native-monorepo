import { Text, View, Button, Alert } from 'react-native';
import React, { Component ,useState} from 'react';
import Companydata from './component/Companydata';
const App = () =>{
  const [name,setName] = useState("Om")

  return(
      <View>
        <Text style={{fontSize:30}}>
          Props in RN
        </Text>
        <Button title='Press me' onPress={()=>setName("peter")}/>
        <User name ={name} age = {20}/>
      </View>
  );
};

interface UserProps {
  name: string;
  age: number;
}

const User  = (props: UserProps)=>{
    return(  
      <View>
        <Text style = {{fontSize:30}}>
            Name : {props.name}
        </Text>
        <Text style = {{fontSize:30}}>
            Age: {props.age}
        </Text>
      </View>
    ); 
};
export default App;
