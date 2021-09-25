import React from 'react';
import {
  View
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux'
import CharactersListSearch from './CharactersListSearch';

function SearchCharacter(props) {
  const navigateToCharacterDetails = (pressProps) => {
    props.navigation.navigate('CharacterDetails', pressProps)
  }

  return (
    <View style={styles.container}>
      <CharactersListSearch navigateToCharacterDetails={navigateToCharacterDetails} />

    </View>
  );

};

const mapStateToProps = state => ({
  characterReducer: state.characterReducer
})

export default connect(mapStateToProps)(SearchCharacter)
