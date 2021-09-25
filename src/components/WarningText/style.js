import palette from 'palette';
import { StyleSheet } from 'react-native';
import * as scaling from 'scaling';
import { I18nManager } from 'react-native'

const styles = StyleSheet.create({
  warningText: {
    color: palette.red,
    fontWeight:'bold'
    // textAlign: I18nManager.isRTL ? "right" : 'left' // secureTextEntry issue
  },
  warningTextContainer:{
    marginStart: scaling.scale(30),
    alignItems:'flex-start'

  }
})

export default styles
