import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Layout from '../Theme/Layout';
import Home from './Home';
import Login from './Login';
import {useGlobalStateSession} from '../Store';

const Stack = createStackNavigator();

const StackGuest = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const StackLogged = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default () => {
  const session = useGlobalStateSession();

  return (
    <SafeAreaView style={Layout.fill}>
      <NavigationContainer>
        {session.logged.value ? <StackLogged /> : <StackGuest />}
      </NavigationContainer>
    </SafeAreaView>
  );
};
