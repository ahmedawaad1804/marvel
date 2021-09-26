import palette from 'palette';
import * as scaling from 'scaling';

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.black,
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    width: scaling.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default styles;
