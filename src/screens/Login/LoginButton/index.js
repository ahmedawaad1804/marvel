import React from 'react';
import {
  Text,
  TouchableOpacity

} from 'react-native';
import styles from './style';
import I18n from 'language/I18n'

export default function LoginButton(props) {
const handleLogin=()=>{
  props.handleLogin()
}

  return (

    <TouchableOpacity  style={styles.button} onPress={handleLogin} >
      <Text style={styles.logInText}>{I18n.t('login.button')}</Text>
    </TouchableOpacity>
  );

};


