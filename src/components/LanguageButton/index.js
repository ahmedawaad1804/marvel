import React from 'react';
import {
    View, Text, TouchableOpacity

} from 'react-native';
import styles from './style';
import I18n from 'language/I18n'
import { I18nManager } from 'react-native'
import RNRestart from 'react-native-restart';

export default function LanguageButton() {
    const changeLanguage = () => {
        I18nManager.forceRTL(!I18nManager.isRTL)
        I18nManager.allowRTL(!I18nManager.isRTL)
        I18n.local == 'ar' ? 'en' : 'ar'
        RNRestart.Restart();
    }

    return (

        <TouchableOpacity style={styles.languageButtonConatiner} onPress={changeLanguage}>
            <Text style={styles.languageButtonText}>{I18n.t('changeLanguage')}</Text>
        </TouchableOpacity>


    );

};


