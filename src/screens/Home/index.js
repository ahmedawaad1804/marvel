import React from 'react';
import {
  View
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux'
import HomeHeader from './HomeHeader';
import CharactersList from './CharactersList';

function Home(props) {
  const navigateToCharacterDetails = (pressProps) => {
    props.navigation.navigate('CharacterDetails', pressProps)
  }

  return (
    <View style={styles.container}>
      <HomeHeader name={props.loginReducer.name} />
      <CharactersList navigateToCharacterDetails={navigateToCharacterDetails} />

    </View>
  );

};
const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
})
export default connect(mapStateToProps)(Home)


