import React, { useEffect ,useState} from 'react';
import {
    Pressable,
    Text,
    FlatList,
    View,
    Image

} from 'react-native';
import Logo from 'src/components/Logo';
import SearchLogo from 'src/components/SearchLogo';
import ImageCard from '../ImageCard';
import styles from './style';

export default function CharactersList(props) {
    useEffect(() => {
        console.log('did update');
    })
    return (

        <View style={styles.flatListContainer}>
            <FlatList
                data={props.data}

                renderItem={({item}) => (
                   <ImageCard item={item} />
                )}
                numColumns={2}
                
            />
        </View>
    );

};


