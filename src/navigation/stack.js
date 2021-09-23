import  React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'screens/Login/index';
import Home from 'screens/Home';
import { connect } from 'react-redux'

const Stack = createStackNavigator();

const StackProvider = (props) => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {!props.loginReducer ? (
                <>
                    {/* <Stack.Screen name="Home" component={Login} /> */}
                   
                    <Stack.Screen name="ProductDetails2" component={Login} />
                </>
            )
                : (
                    <Stack.Screen name="ProductDetails" component={Home} />
                )}


        </Stack.Navigator>
    )

}
const mapStateToProps = state => ({
    loginReducer: state.loginReducer,


})
export default connect(mapStateToProps)(StackProvider)
