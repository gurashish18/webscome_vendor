import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../Screens/MainScreen'
import ProfileScreen from '../Screens/ProfileScreen'



const AppNav = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Main Screen"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ffffff' },
            }}>
                <Tab.Screen
                    name="Main Screen"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'Home',
                        // tabBarIcon: ({ color, size }) => (
                        // <Image source={require('../assets/logo.png')} style={{height: 30, width: 30, resizeMode: 'contain'}}/>
                        // ),
                }}/>
                <Tab.Screen
                    name="Profile Screen"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        // tabBarIcon: ({ color, size }) => (
                        //     <Icon name="local-phone" color={color} size={30} />
                        // ),
                }}/>
        </Tab.Navigator>
    )
}

export default AppNav
