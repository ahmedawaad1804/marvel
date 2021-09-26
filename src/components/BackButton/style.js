import {StyleSheet} from 'react-native';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
  backContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: scaling.verticalScale(10),
  },
});

export default styles;
