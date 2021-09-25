import React from 'react';
import {
  View,
  Text,

} from 'react-native';
import { I18nManager } from 'react-native'

import * as scaling from 'scaling';
import Login_Shape_SVG from 'svg/login-shape.svg'
import styles from './style';

export default function Login_Shape() {


  return (

    <View style={[styles.Login_Shape, { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }]} >
      <Login_Shape_SVG width={scaling.width} height={scaling.height} />
    </View>


  );

};


