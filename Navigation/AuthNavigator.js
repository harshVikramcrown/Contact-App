import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Text,View} from 'react-native';
const Login=()=>{
    return (
    <View>
      <Text>Hello World</Text>
    </View>
    )
}
const SignUp=()=>{
    return (
    <View>
      <Text>Hi from ContactDetail</Text>
    </View>
    )
}

const AuthNavigator =()=>{
    const AuthStack=createStackNavigator();
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
export default AuthNavigator;