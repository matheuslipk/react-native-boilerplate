import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useGlobalStateUser} from '../Store';

const Login = ({navigation}: any) => {
  const state = useGlobalStateUser();

  return (
    <View>
      <TextInput
        value={state.user.name.value}
        onChangeText={state.user.name.set}
        style={styles.input}
      />
      <TextInput
        value={state.user.phone.value}
        onChangeText={state.user.phone.set}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 10,
  },
});

export default Login;
