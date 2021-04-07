import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
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
    <NavigationContainer>
      {session.logged.value ? <StackLogged /> : <StackGuest />}
    </NavigationContainer>
  );
};
