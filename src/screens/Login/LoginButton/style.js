import palette from 'palette';
import { StyleSheet } from 'react-native';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
  button: {
    width: scaling.scale(120),
    height: scaling.verticalScale(60),
    backgroundColor: palette.black,
    justifyContent:'center',
    alignItems:'center',
    marginTop: scaling.verticalScale(40),
    marginStart: scaling.scale(30),
    borderWidth:scaling.scale(3),
    borderColor: palette.yellow,
  },
  logInText:{
    color:palette.white,
    fontSize:scaling.verticalScale(20)

  }
})

export default styles
