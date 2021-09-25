import React, { useEffect, useState } from 'react';
import {
    Pressable,
    Text,
    FlatList,
    View,
    Image

} from 'react-native';
import Loading from 'src/components/Loading';
import dataService from 'services/marvelServices/dataService';

import ImageCard from '../ImageCard';
import styles from './style';
import { useCallback } from 'react';

function CharactersList(props) {
    const [data, setData] = useState([])
    const [currentOffset, setCurrentOffset] = useState(0)
    const [totalCharacters, setTotalCharacters] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const offsetStep = 20


    useEffect(() => {
        // console.log('props',props);
        loadMoreData(currentOffset)
    }, [])
    const loadMoreData = (data_offset) => {
        dataService.getCharacters({ offset: data_offset })
            .then(res => {
                console.log('result', res.data.data);
                setTotalCharacters(res.data.data.total)
                setData((prevCharacters) => [...prevCharacters, ...res.data.data.results]);
                setIsLoading(false)
                setCurrentOffset((prev) => (prev || 1) + offsetStep - 1);
            })
            .catch(err => {
                console.log('err', err);
                setIsLoading(false)
            })
    }

    return (

        <View style={styles.flatListContainer}>
            <FlatList
                data={data}
                keyExtractor={useCallback((item, index) => index, [])}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={useCallback(({ item, index }) => (
                    <ImageCard item={item} index={index} navigateToCharacterDetails={props.navigateToCharacterDetails}/>
                ), [])}
                initialNumToRender={8}
                numColumns={2}
                ListFooterComponent={() => (isLoading && < Loading />)}
                onEndReached={async () => {
                    setIsLoading(true)
                    const hasMore = totalCharacters > data.length;
                    if (
                        hasMore
                    ) {
                        console.log('currentOffset', currentOffset);

                        loadMoreData(currentOffset);


                    }
                }}
            />
        </View>
    );

};


export default React.memo(CharactersList);