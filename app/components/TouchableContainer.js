import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

const TouchableContainer = ({children, onPress, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {borderBottomColor: colors.lightGray}, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
});
