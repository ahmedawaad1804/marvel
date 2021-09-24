import palette from 'palette';
import * as scaling from 'scaling';

import {

    StyleSheet

} from 'react-native';
const styles = StyleSheet.create({
    cardConatiner: {
        width: scaling.width * 48 / 100,
        height: scaling.height * 40 / 100,

        margin: scaling.width * 1 / 100,
        alignItems: 'flex-start',
        backgroundColor: palette.white,
        shadowColor: palette.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageContainer: {
        height: '60%',
        width: '100%',

    },
    characterImage: {
        height: '100%',
        resizeMode: 'contain',
        width: '100%'
    },
    descriptionContainer: {
        paddingTop: scaling.verticalScale(10),
        paddingHorizontal: scaling.scale(10),
        height: '40%',

        width: '100%',
    }


})

export default styles
