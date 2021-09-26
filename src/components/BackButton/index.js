
import React from 'react';
import {
    View,

} from 'react-native';
import * as scaling from 'scaling';
import Back_SVG from 'svg/arrow-left.svg'
import styles from './style';

export default function BackButton() {


    return (

        <View style={styles.footerContainer} >
            <Back_SVG width={scaling.scale(30)} height={scaling.verticalScale(30)} />
        </View>


    );

};


