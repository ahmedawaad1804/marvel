import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, Pressable, BackHandler, Alert
} from 'react-native';
import styles from './style';



function CharacterDetails(props) {
  const [overlayImage, showOverlayImage] = useState(false)
  const characterDetails = props.route.params.props
  const characterImage = props.route.params.image
  const arrayOfCategories = ['comics', 'series', 'stories', 'events']

  useEffect(() => {
    console.log(props.route.params);
  })
  const toogleImage = () => {
    showOverlayImage(!overlayImage)
  }
  return (
    <View style={styles.container}>
      {overlayImage && <Pressable style={styles.overlayImageContainer} onPress={toogleImage}>
        <Image style={styles.overlayImage} source={{ uri: characterImage }} />

      </Pressable>}
      <ScrollView>
        <Image style={styles.headerImage} source={{ uri: characterImage }} />

        {arrayOfCategories.map(categoryName => (
          characterDetails[categoryName].available ? <View style={styles.paragraph} >
            <Text style={styles.headerText}>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} <Text style={styles.paragraphText} >{characterDetails[categoryName].available}</Text></Text>
            {
              characterDetails[categoryName].items.map(item => {
                return <Pressable onPress={toogleImage}><Text style={styles.paragraphText}>{item.name}</Text></Pressable>

              })
            }

          </View> : null
        ))}
      </ScrollView>

    </View>
  );

};

export default CharacterDetails


