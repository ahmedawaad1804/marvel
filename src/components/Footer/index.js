import React from 'react';
import {View} from 'react-native';
import * as scaling from 'scaling';
import Facebook_SVG from 'svg/facebook.svg';
import Twitter_SVG from 'svg/twitter.svg';
import Instagram_SVG from 'svg/instagram.svg';
import styles from './style';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Facebook_SVG
        width={scaling.scale(30)}
        height={scaling.verticalScale(30)}
      />
      <Twitter_SVG
        width={scaling.scale(30)}
        height={scaling.verticalScale(30)}
      />
      <Instagram_SVG
        width={scaling.scale(30)}
        height={scaling.verticalScale(30)}
      />
    </View>
  );
}
