import React from 'react';
import {View} from 'react-native';
import * as scaling from 'scaling';
import Logo_SVG from 'svg/logo.svg';
import styles from './style';

export default function Logo(props) {
  return (
    <View style={props.position ? styles.Logo_SVG : null}>
      <Logo_SVG
        width={scaling.scale(props.width)}
        height={scaling.verticalScale(props.height)}
      />
    </View>
  );
}
