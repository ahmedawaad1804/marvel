import React from 'react';
import {TextInput} from 'react-native';
import palette from 'palette';

import styles from './style';
import I18n from 'language/I18n';

export default function PasswordTextInput(props) {
  return (
    <TextInput
      style={styles.passwordTextInput}
      onChangeText={props.onChangePassword}
      placeholder={I18n.t('login.password')}
      secureTextEntry
      placeholderTextColor={palette.placeholdeGrey}
    />
  );
}
