import React from 'react';
import {
  View

} from 'react-native';
import { Provider } from 'react-redux'
import store from 'src/store/store';
import Navigation from 'src/navigation/navigation';

import styles from './style';
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );

};
export default App
