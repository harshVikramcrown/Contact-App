import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavContainer from './src/navigations/Index'
import GlobalProvider from './src/context/Provider';

const App= () => {
  return (
    <GlobalProvider>
    <AppNavContainer/>
    </GlobalProvider>
  );
}
export default App;
