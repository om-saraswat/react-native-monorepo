import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import React, { Component ,useState} from 'react';
import Companydata from './component/Companydata';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
const App = () => {
  
  return(
      <View>
        <Text style = {styles.textbox}> 
          Style in React-Native
        </Text>
        <Text style = {styles.textbox}>
          Style in React-Native
        </Text>
        <Text style = {styles.textbox}>
          Style in React-Native
        </Text>
        <Text style = {styles.textbox}>
          Style in React-Native
        </Text>
      </View>
  );
};




export default App;
