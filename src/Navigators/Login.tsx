import {useState} from '@hookstate/core';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useGlobalStateSession} from '../Store';

const Login = () => {
  const session = useGlobalStateSession();
  const {t} = useTranslation();
  const form = useState({
    name: '',
    password: '',
  });

  return (
    <View>
      <TextInput
        value={form.name.value}
        onChangeText={form.name.set}
        style={styles.input}
      />
      <TextInput
        value={form.password.value}
        onChangeText={form.password.set}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => session.logged.set(true)}>
        <Text>{t('enter')}</Text>
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
