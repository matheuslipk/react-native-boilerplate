import {useState} from '@hookstate/core';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Input} from 'react-native-elements';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
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
      <Input
        value={form.name.value}
        onChangeText={form.name.set}
        style={styles.input}
        leftIcon={{type: 'antdesign', name: 'user', size: 30}}
        label={t('login.username')}
      />
      <Input
        value={form.password.value}
        onChangeText={form.password.set}
        style={styles.input}
        leftIcon={{type: 'ionicon', name: 'key-outline', size: 30}}
        label={t('login.password')}
      />
      <TouchableOpacity onPress={() => session.logged.set(true)}>
        <Text>{t('login.signIn')}</Text>
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
