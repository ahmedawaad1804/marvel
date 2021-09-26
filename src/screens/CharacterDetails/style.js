import palette from 'palette';
import * as scaling from 'scaling';

import {

  StyleSheet

} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
  },
  headerImage:{
      width:scaling.width,
      height:scaling.height*.4,
      resizeMode:'cover'
  },
  overlayImage:{
    width:scaling.width*.8,
    alignSelf:'center',
    height:scaling.height*.4,
    resizeMode:'stretch',
    position:'absolute',
    top:scaling.verticalScale(100),
    zIndex:1,
    backgroundColor:'white'

  },
  overlayImageContainer:{
    position:'absolute',
    width:scaling.width,
    height:scaling.height,
    backgroundColor:palette.black,
    zIndex:1,
  },
  paragraph:{
      padding:scaling.scale(15)
  },
  headerText:{
      fontSize:scaling.scale(25),
      fontWeight:'bold'
  },
  paragraphText:{
    fontSize:scaling.scale(16),
    fontWeight:'bold'
  },
  headerContainer:{
    width:scaling.width,
    height:scaling.verticalScale(70),
    backgroundColor:palette.black,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'

  },
  headerCharacterName:{
    fontSize:scaling.scale(25),
      fontWeight:'bold',
      color:palette.white,
      textAlign:'center',
      flex:1
  },
  backButtonContainer:{
    marginStart:scaling.scale(20)
  }
 
})

export default styles
