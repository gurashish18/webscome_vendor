import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import LoginScreen from '../Screens/LoginScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'



const AuthNav = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                {/* <AuthStack.Screen name="Onboard" component={OnboardScreen}/> */}
                <AuthStack.Screen name="Login" component={LoginScreen}/>
                <AuthStack.Screen name="CreateAccount" component={CreateAccountScreen}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNav
