import palette from 'palette';
import * as scaling from 'scaling';

import {

    StyleSheet

} from 'react-native';
const styles = StyleSheet.create({
    flatListContainer: {
        width: scaling.width,
        alignItems: 'center'
    },
    cardConatiner: {
        width: scaling.width * 48 / 100,
        height: scaling.height * 40 / 100,
        backgroundColor: 'red',
        margin: scaling.width * 1 / 100,
    },
    imageContainer: {
        flex: 8,
        width: '100%',
        backgroundColor: 'green'
    },
    characterImage: {
        height: '100%',
        resizeMode: 'contain',
        width:'100%'
    }


})

export default styles
