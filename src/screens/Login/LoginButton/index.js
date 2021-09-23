import React from 'react';
import {
  Pressable,
  Text,
  TouchableOpacity

} from 'react-native';
import styles from './style';

export default function LoginButton(props) {
const handleLogin=()=>{
  props.handleLogin()
}

  return (

    <TouchableOpacity  style={styles.button} onPress={handleLogin} >
      <Text style={styles.logInText}>Log In</Text>
    </TouchableOpacity>
  );

};


