import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {Text,View} from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './Drawer';
const AppNavContainer=()=>{
    const isLoggedIn = true;
    return (
        <NavigationContainer>
    {isLoggedIn ? <DrawerNavigator/>:<AuthNavigator/>}
    </NavigationContainer>
    )
}
export default AppNavContainer;