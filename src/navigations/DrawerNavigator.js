import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Text,View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';



const DrawerNavigator =()=>{
    const Drawer=createDrawerNavigator();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="HOME" component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;