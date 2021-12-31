import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import LoginScreen from '../Screens/LoginScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'
import WorkerInfo from '../Screens/WorkerInfo'
import EarningScreen from '../Screens/EarningScreen'
import AppNav from './AppNav'


const Navigation = () => {
    const [user, setuser] = useState(false)
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                    <Stack.Screen name="Onboard" component={OnboardScreen}  options={{ headerShown: false }}/>
                    {user ? (
                    <>
                        <Stack.Screen name="AppNav" component={AppNav} />
                    </>
                    ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
                        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ title: 'Create your account' }}/>
                        <Stack.Screen name="WorkerInfo" component={WorkerInfo} options={{ title: 'Tell us about yourself' }}/>
                        <Stack.Screen name="Earning" component={EarningScreen} options={{ headerShown: false }}/>
                        <Stack.Screen name="AppNav" component={AppNav}  options={{ headerShown: false }}/>
                    </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
