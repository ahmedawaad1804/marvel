import palette from 'palette';
import {StyleSheet} from 'react-native';
import * as scaling from 'scaling';
import {I18nManager} from 'react-native';

const styles = StyleSheet.create({
  passwordTextInput: {
    marginStart: scaling.scale(30),
    borderBottomWidth: scaling.scale(3),
    borderColor: palette.white,
    width: scaling.width / 2,
    color: palette.white,
    textAlign: I18nManager.isRTL ? 'right' : 'left', // secureTextEntry issue
  },
});

export default styles;
