import palette from 'palette';
import { StyleSheet } from 'react-native';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
  usernameTextInput: {
    marginTop: scaling.verticalScale(200),
    marginStart:scaling.scale(30),
    borderBottomWidth: scaling.scale(3),
    borderColor: palette.white,
    width: scaling.width/2
  }
})

export default styles
