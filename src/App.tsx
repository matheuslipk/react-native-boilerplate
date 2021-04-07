import React from 'react';
import Navigators from './Navigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './Translations';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigators />
    </SafeAreaProvider>
  );
};

export default App;
