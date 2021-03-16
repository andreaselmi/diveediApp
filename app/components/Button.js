import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

//components
import Text from './Text';

const AppButton = ({
  style,
  name,
  mode = 'contained',
  letterSpacing = 6,
  height = 50,
  ...restProps
}) => {
  return (
    <Button
      labelStyle={{letterSpacing}}
      contentStyle={{height}}
      mode={mode}
      style={[styles.button, style]}
      {...restProps}>
      <Text style={{color: 'white', fontSize: 16}}>{name}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
});

export default AppButton;
