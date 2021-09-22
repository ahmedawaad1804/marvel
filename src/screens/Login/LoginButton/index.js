import React from 'react';
import {
  Pressable,
  Text,
  TouchableOpacity

} from 'react-native';
import styles from './style';

export default function LoginButton(props) {


  return (

    <TouchableOpacity  style={styles.button} >
      <Text style={styles.logInText}>Log In</Text>
    </TouchableOpacity>
  );

};


