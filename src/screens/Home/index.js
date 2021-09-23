import React, { useState ,useEffect} from 'react';
import {
  View,Text, FlatList
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux'
import HomeHeader from './HomeHeader';
import dataService from '../../services/marvelServices/dataService';
import CharactersList from './CharactersList';
import imageService from 'src/services/marvelServices/imageService';



function Home(props) {
  const [data,setData]=useState([])
  useEffect(()=>{
   dataService.getCharacters()
   .then(res=>{
     console.log(res.data.data.results);
     setData(res.data.data.results)
   })
   .catch(err=>{
     console.log('err',err);
   })
  },[])
  
  return (
    <View style={styles.container}>
      <HomeHeader name={props.loginReducer.name}/>
      <CharactersList data={data} />
      
    </View>
  );

};
const mapStateToProps = state => ({
    loginReducer: state.loginReducer,
})
export default connect(mapStateToProps)(Home)
  

