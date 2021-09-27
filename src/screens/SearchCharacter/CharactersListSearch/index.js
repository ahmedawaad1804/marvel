import React, {useState} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {debounce} from 'lodash';
import ImageCard from '../ImageCard';
import styles from './style';
import {connect} from 'react-redux';
import {setCharacterList} from 'store/actions/characterAction';
import SearchHeader from '../SearchHeader';

function CharactersListSearch(props) {
  const [searchData, setSearchData] = useState(props.characterReducer);
  const [searchWord, setSearchWord] = useState('');
  const [refreshControl, setRefreshControl] = useState(false);

  const playRefresh = searchText => {
    setRefreshControl(true);
    handleSearch(searchText);
  };
  const handleSearch = debounce(searchText => {
    setSearchWord(searchText);
    if (searchText) {
      setSearchData(
        props.characterReducer.filter(character => {
          if (character.name.toLowerCase().includes(searchText.toLowerCase())) {
            return character;
          }
        }),
      );
    } else {
      setSearchData(props.characterReducer);
    }
    setRefreshControl(false);
  }, 2000);
  return (
    <View style={styles.flatListContainer}>
      <SearchHeader onsearchTextChange={playRefresh} />
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshControl} />}
        data={searchData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => (
          <ImageCard
            item={item}
            index={index}
            navigateToCharacterDetails={props.navigateToCharacterDetails}
            searchWord={searchWord}
          />
        )}
        initialNumToRender={8}
        numColumns={2}
      />
    </View>
  );
}
const mapStateToProps = state => ({
  characterReducer: state.characterReducer,
});
const mapDispatchToProps = {
  setCharacterList,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharactersListSearch);
