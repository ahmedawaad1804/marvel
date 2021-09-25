import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';
import I18n from 'language/I18n'
import palette from 'palette';

export default function UsernameTextInput(props) {


  return (

    <TextInput
      style={styles.usernameTextInput}
      onChangeText={props.onChangeUsername}
      placeholder={I18n.t('login.username')}
      placeholderTextColor={palette.placeholdeGrey}

    />
  );

};


