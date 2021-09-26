
import React from 'react';
import {
    Text, Animated, Image, Pressable

} from 'react-native';
import BackButton from 'src/components/BackButton';
import styles from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as scaling from 'scaling';
import { useNavigation } from '@react-navigation/core';


export default function AnimatedHeader({ offset, name, image }) {
    const HEADER_HEIGHT = 150;
    const { goBack } = useNavigation()

    const insets = useSafeAreaInsets();

    const headerHeight = offset.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [insets.top + 50, HEADER_HEIGHT + insets.top],
        extrapolate: 'clamp'
    });
    const imageWidth = offset.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [0, 80],
        extrapolate: 'clamp'
    });


    return (
        <Animated.View style={[styles.headerContainer, { height: headerHeight }]}>
            <Pressable style={styles.backButtonContainer} onPress={goBack}>
                <BackButton />
            </Pressable>
            <Text style={styles.headerCharacterName}>{name}</Text>
            <Animated.View style={[{
                marginEnd: scaling.scale(20)
                , width: imageWidth, height: imageWidth,
            }]} >
                <Image style={styles.headerImage} source={{ uri: image }} />
            </Animated.View>
        </Animated.View>


    );

};
