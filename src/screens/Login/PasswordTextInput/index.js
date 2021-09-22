import React from 'react';
import {
  TextInput

} from 'react-native';
import styles from './style';

export default function PasswordTextInput(props) {


  return (

    <TextInput
      style={styles.passwordTextInput}
      onChangeText={props.onChangePassword}
      placeholder="Password"
      secureTextEntry
    />
  );

};


