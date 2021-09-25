import React from 'react';
import {
  Text, View,

} from 'react-native';
import styles from './style';

export default function WarningText(props) {


  return (
    <View style={styles.warningTextContainer}>
      <Text style={styles.warningText}>{props.warning}</Text>
    </View>
  );

};


