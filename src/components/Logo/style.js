import {StyleSheet} from 'react-native';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
  Logo_SVG: {
    position: 'absolute',
    start: scaling.scale(30),
    top: scaling.verticalScale(10),
  },
});

export default styles;
