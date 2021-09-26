import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, Animated, Image, ScrollView, Pressable
} from 'react-native';
import AnimatedHeader from 'src/components/AnimatedHeader';
import styles from './style';





function CharacterDetails(props) {
  const offset = useRef(new Animated.Value(0)).current;
 
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
     <AnimatedHeader offset={offset} name={characterDetails.name} image={characterImage}/>
      <ScrollView
        scrollEventThrottle={200}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
      >
        <Image style={styles.contentImage} source={{ uri: characterImage }} />

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


