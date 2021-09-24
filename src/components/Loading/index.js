import palette from 'palette';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ style, color}) => {
  return (
    <ActivityIndicator
      style={[styles.containerStyle, style]}
      color={color || palette.black}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Loading;
