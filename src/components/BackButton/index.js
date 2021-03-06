import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Pressable, I18nManager} from 'react-native';
import * as scaling from 'scaling';
import Back_SVG from 'svg/arrow-left.svg';
import styles from './style';
import {isFunction} from 'lodash';

export default function BackButton({containerStyle, onPress}) {
  const {goBack} = useNavigation();

  return (
    <Pressable
      style={[
        styles.backContainer,
        {transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]},
        containerStyle,
      ]}
      onPress={() => {
        isFunction(onPress) ? onPress : goBack();
      }}>
      <Back_SVG width={scaling.scale(30)} height={scaling.verticalScale(30)} />
    </Pressable>
  );
}
