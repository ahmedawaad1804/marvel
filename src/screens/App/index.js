import React from 'react';
import {
  View,
  Text,
 
} from 'react-native';
import Navigation from 'src/navigation/navigation';

import styles from './style';
const App =()=> {
 
 
    return (
      <View style={styles.container}>
       <Navigation/>
      </View>
    );
  
};
export default App
