import React, {useEffect, useState} from 'react';
import Highlighter from 'react-native-highlight-words';
import {TouchableOpacity, View, Image, Text, ScrollView} from 'react-native';
import imageSize from './imageEnum';
import imageService from 'src/services/marvelServices/imageService';
import styles from './style';

function ImageCard(props) {
  const [image, updateImage] = useState('');
  useEffect(() => {
    imageService
      .getCharacterPhoto(props.item.thumbnail.path, imageSize.standard_large)
      .then(res => {
        updateImage(res.config.url);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pressCard = () => {
    props.navigateToCharacterDetails({image: image, props: props.item});
  };
  return (
    <TouchableOpacity style={styles.cardConatiner} onPress={pressCard}>
      <View style={styles.imageContainer}>
        <Image style={styles.characterImage} source={{uri: image}} />
      </View>
      <View style={styles.descriptionContainer}>
        <ScrollView>
          <Text>{props.item.name}</Text>
          <Highlighter
            highlightStyle={styles.highlightText}
            searchWords={[props.searchWord]}
            textToHighlight={props.item.name}
          />
          <Text>Comics Available : {props.item.comics.available}</Text>
          <Text>Stories Available : {props.item.stories.available}</Text>
          <Text>Series Available : {props.item.series.available}</Text>
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}

export default ImageCard;
