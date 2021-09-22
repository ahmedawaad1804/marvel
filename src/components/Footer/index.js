import React from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,

} from 'react-native';
import * as scaling from 'scaling';
import Logo_SVG from 'svg/logo.svg'
import styles from './style';

export default function Footer() {


    return (
        // <View style={{ flex: 1,width:400,backgroundColor:'red'}}>
        //     <View style={{ flex: 1,width:400,backgroundColor:'green'}}>
        //     </View>
        <KeyboardAvoidingView style={{flex: 1}} 
        behavior={'height'} 
        keyboardVerticalOffset={300}>
            <View style={styles.footerContainer} >
                <Logo_SVG width={scaling.scale(100)} height={scaling.verticalScale(100)} />
            </View>
            </KeyboardAvoidingView>
        // </View>

    );

};


