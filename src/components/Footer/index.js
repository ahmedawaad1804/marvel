import React from 'react';
import {
    View,

} from 'react-native';
import * as scaling from 'scaling';
import Logo_SVG from 'svg/logo.svg'
import styles from './style';

export default function Footer() {


    return (
      
            <View style={styles.footerContainer} >
                <Logo_SVG width={scaling.scale(100)} height={scaling.verticalScale(100)} />
                <Logo_SVG width={scaling.scale(100)} height={scaling.verticalScale(100)} />
            </View>
          

    );

};


