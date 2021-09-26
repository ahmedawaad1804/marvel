import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import palette from 'palette';

import {Provider} from 'react-redux';
import store from 'src/store/store';
import Navigation from 'src/navigation/navigation';

import styles from './style';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'default'}
        backgroundColor={palette.black}
        drawBehind={true}
        visible={true}
      />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};
export default App;
