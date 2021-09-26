import React from 'react';
import {View} from 'react-native';
import * as scaling from 'scaling';
import Search_Logo_SVG from 'svg/search.svg';

export default function SearchLogo(props) {
  return (
    <View>
      <Search_Logo_SVG
        width={scaling.scale(props.width)}
        height={scaling.verticalScale(props.height)}
        fill={'#ffffff'}
      />
    </View>
  );
}
