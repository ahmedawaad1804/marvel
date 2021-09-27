import React, {useRef} from 'react';
import {TextInput, View, Animated} from 'react-native';
import SearchLogo from 'src/components/SearchLogo';
import styles from './style';
import I18n from 'language/I18n';
import * as scaling from 'scaling';

export default function SearchHeader(props) {
  const increaseWidthAnim = useRef(
    new Animated.Value((scaling.width * 20) / 100),
  ).current;
  React.useEffect(() => {
    Animated.timing(increaseWidthAnim, {
      toValue: (scaling.width * 100) / 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [increaseWidthAnim]);
  return (
    <View style={styles.headerContainer}>
      <Animated.View
        style={[styles.searchContainer, {width: increaseWidthAnim}]}>
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
      </Animated.View>
    </View>
  );
}
