import React from 'react';
import {
  View,
  Text,

} from 'react-native';
import * as scaling from 'scaling';
import Logo_SVG from 'svg/logo.svg'
import styles from './style';

export default function Logo() {


  return (
   
      <View style={styles.Logo_SVG} >
        <Logo_SVG width={scaling.scale(100)} height={scaling.verticalScale(100)} />
      </View>
     
    
  );

};


