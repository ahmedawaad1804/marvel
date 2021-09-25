import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'screens/Login/index';
import Home from 'screens/Home';
import { connect } from 'react-redux'
import CharacterDetails from 'src/screens/CharacterDetails';
import SearchCharacter from 'src/screens/SearchCharacter';

const Stack = createStackNavigator();

const StackProvider = (props) => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {!props.loginReducer ? (
                <>
                    <Stack.Screen name="Login" component={Login} />
                </>
            )
                : (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
                        <Stack.Screen name="SearchCharacter" component={SearchCharacter} />
                    </>
                )}


        </Stack.Navigator>
    )

}
const mapStateToProps = state => ({
    loginReducer: state.loginReducer,


})
export default connect(mapStateToProps)(StackProvider)
