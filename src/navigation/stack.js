import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/index';
const Stack = createStackNavigator();

const StackProvider = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            // transitionSpec:
        }}
        >

            {true? (
                <>
                    <Stack.Screen name="Home" component={Login} />
                    <Stack.Screen name="ProductDetails" component={Login} />
                    <Stack.Screen name="ProductDetails2" component={Login} />
                </>
            )
                : (
                    null
                )}


        </Stack.Navigator>
    )

}


export default StackProvider