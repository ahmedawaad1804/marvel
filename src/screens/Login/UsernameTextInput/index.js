import React from 'react';
import {
  TextInput

} from 'react-native';
import styles from './style';

export default function UsernameTextInput(props) {


  return (

    <TextInput
      style={styles.usernameTextInput}
      onChangeText={props.onChangeUsername}
      placeholder="Username"
    />
  );

};


