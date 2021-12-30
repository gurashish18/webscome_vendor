import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import LoginScreen from '../Screens/LoginScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'
import AppNav from './AppNav'



const Navigation = () => {
    const [user, setuser] = useState(false)
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Onboard" component={OnboardScreen} />
                    {user ? (
                    <>
                        <Stack.Screen name="AppNav" component={AppNav} />
                    </>
                    ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
                    </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
