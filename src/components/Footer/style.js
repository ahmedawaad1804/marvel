import {StyleSheet} from 'react-native';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: scaling.verticalScale(10),
  },
});

export default styles;
