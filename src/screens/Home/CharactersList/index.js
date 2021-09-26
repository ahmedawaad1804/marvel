import React, {useEffect, useState, useRef} from 'react';
import {FlatList, View} from 'react-native';
import Loading from 'src/components/Loading';
import ImageCard from '../ImageCard';
import styles from './style';
import {useCallback} from 'react';
import {connect} from 'react-redux';
import {setCharacterList} from 'store/actions/characterAction';

function CharactersList(props) {
  const [data, setData] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const isLoading = useRef(false);
  const offsetStep = 20;

  useEffect(() => {
    loadMoreData(currentOffset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setData(props.characterReducer);
  }, [props]);
  const loadMoreData = async data_offset => {
    isLoading.current = true;
    try {
      props.setCharacterList(data_offset);
      setCurrentOffset(prev => (prev || 1) + offsetStep);
    } catch (error) {
      console.log('err', error);
    } finally {
      isLoading.current = false;
      console.log('finally', isLoading.current);
    }
  };

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={data}
        keyExtractor={useCallback((item, index) => index, [])}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={useCallback(
          ({item, index}) => (
            <ImageCard
              item={item}
              index={index}
              navigateToCharacterDetails={props.navigateToCharacterDetails}
            />
          ),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [],
        )}
        initialNumToRender={8}
        numColumns={2}
        ListFooterComponent={() => isLoading && <Loading />}
        onEndReached={async () => {
          loadMoreData(currentOffset);
        }}
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
export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
