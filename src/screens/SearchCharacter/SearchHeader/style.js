import palette from 'palette';
import * as scaling from 'scaling';

import {

    StyleSheet

} from 'react-native';
const styles = StyleSheet.create({
    headerContainer: {
        width: scaling.width,
        backgroundColor: palette.black,
        height: scaling.verticalScale(80),
        flexDirection: 'row'
    },
    searchContainer: {
        flex: 4,
        justifyContent:'center',
        alignItems:'center',
    },
    searchBar:{
        width:'90%',
        height:'75%',
        backgroundColor:palette.searchGrey,
        borderRadius:scaling.width,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    searchText:{
        fontSize:scaling.scale(16),
        color:palette.white
    },
    searchTextContainer:{
        flex:4,
        justifyContent:'center',
        paddingStart:scaling.scale(10)
    },
    searchLogoContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingEnd:scaling.scale(10)
    },
    searchTextInput:{
        
    }


})

export default styles
