import React from 'react';
import {
    Pressable,
    Text,
    TouchableOpacity,
    View

} from 'react-native';
import Logo from 'src/components/Logo';
import SearchLogo from 'src/components/SearchLogo';
import styles from './style';

export default function HomeHeader(props) {

    return (

        <View style={styles.headerContainer} >
            <View style={styles.logoContainer}>
                <Logo height={60} width={60} />
            </View>
            <TouchableOpacity style={styles.searchContainer} onPress={props.navigateToCharacterSearch}>
                <View style={styles.searchBar}>
                    <View style={styles.searchTextContainer}>
                        <Text style={styles.searchText}>Search your hero ...</Text>
                    </View>
                    <View style={styles.searchLogoContainer}>
                        <SearchLogo height={40} width={40}/>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{'Hi,\n'}{props.name}</Text>
            </View>

        </View>
    );

};


