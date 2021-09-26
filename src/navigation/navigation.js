import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackProvider from './stack';
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackProvider />
    </NavigationContainer>
  );
};
export default Navigation;
