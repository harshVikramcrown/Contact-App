import React, { useContext } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import DrawerNavigator from './DrawerNavigator';
const AppNavContainer=()=>{
    const{
         authState: {isLoggedIn},
     } = useContext(GlobalContext);

     console.log('isLoggedIn :>> ', isLoggedIn);
    return (
        <NavigationContainer>
    {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    );
};
export default AppNavContainer;