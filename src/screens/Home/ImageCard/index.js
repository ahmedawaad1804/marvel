import React, { useEffect,useState } from 'react';
import {
    Pressable,
    Text,
    FlatList,
    View,
    Image

} from 'react-native';
import imageSize from './imageEnum'
import imageService from 'src/services/marvelServices/imageService';
import styles from './style';

export default function ImageCard(props) {
    const [image,updateImage]=useState('')
    useEffect(async()=>{
      await imageService.getCharacterPhoto(props.item.thumbnail.path,imageSize.portrait_xlarge)
       .then(res=>{
        console.log('imageObject',res.config.url);
        updateImage(res.config.url)
       })
     
        // })
       },[])
    useEffect(() => {
        console.log('image   ',props.item.thumbnail.path);
    })
    return (

      
                    <View style={styles.cardConatiner}>

                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.characterImage}
                                source={{uri:image}} />
                        </View>
                    </View>
                
    );

};


