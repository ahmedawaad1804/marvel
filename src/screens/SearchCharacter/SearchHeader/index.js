import React, { useRef, useEffect } from 'react';
import {
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View

} from 'react-native';
import SearchLogo from 'src/components/SearchLogo';
import styles from './style';
import I18n from 'language/I18n'


export default function SearchHeader(props) {

    return (

        <View style={styles.headerContainer} >

            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <View style={styles.searchTextContainer}>
                        <TextInput
                            autoFocus
                            style={styles.searchTextInput}
                            placeholder={I18n.t('search.searchHero')}
                            onChangeText={props.onsearchTextChange}

                        />
                    </View>
                    <View style={styles.searchLogoContainer}>
                        <SearchLogo height={40} width={40} />
                    </View>
                </View>
            </View>


        </View>
    );

};


