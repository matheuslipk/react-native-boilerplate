import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Login = ({navigation}: any) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
