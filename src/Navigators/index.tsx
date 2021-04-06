import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Layout from '../Theme/Layout';
import Home from './Home';
import Login from './Login';

const Stack = createStackNavigator();

export default () => {
  return (
    <SafeAreaView style={Layout.fill}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
