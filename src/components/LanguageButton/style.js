import palette from 'palette';
import { StyleSheet } from 'react-native';
import * as scaling from 'scaling';

const styles = StyleSheet.create({
    languageButtonConatiner:{
        width: scaling.scale(120),
        height: scaling.verticalScale(60),
        backgroundColor: palette.yellow,
        justifyContent:'center',
        alignItems:'center',
        marginTop: scaling.verticalScale(40),
        marginStart: scaling.scale(30),
        borderRadius:scaling.scale(20)
    },
    languageButtonText:{
        color:palette.black
    }
})

export default styles
