import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import {SafeAreaView} from 'react-native';
import Layout from '../Theme/Layout';

const Stack = createStackNavigator();

export default () => {
  return (
    <SafeAreaView style={Layout.fill}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
