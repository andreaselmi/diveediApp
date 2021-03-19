import React from 'react';
import {Text, StyleSheet} from 'react-native';

const AppText = ({children, style, numberOfLines = 3}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
