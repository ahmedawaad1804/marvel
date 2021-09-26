import { StyleSheet } from 'react-native';
import * as scaling from 'scaling';
import palette from 'palette';


const styles = StyleSheet.create({
    headerContainer: {
        width: scaling.width,
        // height:scaling.verticalScale(70),
        backgroundColor: palette.black,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    
      },
      headerCharacterName: {
        fontSize: scaling.scale(25),
        fontWeight: 'bold',
        color: palette.white,
        textAlign: 'center',
        flex: 1
      },
      backButtonContainer: {
        marginStart: scaling.scale(20)
      },
      headerImage: {
        resizeMode: 'contain',
        borderRadius:scaling.width/10,
        width:'100%',
        height:'100%',
      }
})

export default styles
