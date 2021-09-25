import React from 'react';
import {
    Pressable,
    Text,
    TouchableOpacity,
    View,
    Alert

} from 'react-native';
import Logo from 'src/components/Logo';
import SearchLogo from 'src/components/SearchLogo';
import styles from './style';
import I18n from 'language/I18n'
import { setLogin } from 'src/store/actions/loginAction';
import { connect } from 'react-redux'


 function HomeHeader(props) {
    const createTwoButtonAlert = () =>
    Alert.alert(
        I18n.t('logout.header'),
        I18n.t('logout.content'),
      [
        {
          text: I18n.t('no'),
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: I18n.t('yes'), onPress: () => {props.setLogin(null)}}
      ]
    );
    return (

        <View style={styles.headerContainer} >
            <View style={styles.logoContainer}>
                <Logo height={60} width={60} />
            </View>
            <TouchableOpacity style={styles.searchContainer} onPress={props.navigateToCharacterSearch}>
                <View style={styles.searchBar}>
                    <View style={styles.searchTextContainer}>
                        <Text style={styles.searchText}>{I18n.t('search.searchHero')}</Text>
                    </View>
                    <View style={styles.searchLogoContainer}>
                        <SearchLogo height={40} width={40}/>
                    </View>
                </View>
            </TouchableOpacity>
            <Pressable style={styles.nameContainer} onPress={createTwoButtonAlert}>
                <Text style={styles.nameText}>{`${I18n.t('welcome')}\n`}{props.name}</Text>
            </Pressable>

        </View>
    );

};

const mapDispatchToProps = {
    setLogin
  };
  export default connect(null, mapDispatchToProps)(HomeHeader)
