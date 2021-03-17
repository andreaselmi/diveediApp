import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

//components
import Text from './Text';

const AppButton = ({
  buttonStyle,
  name,
  mode = 'contained',
  height = 50,
  textStyle,
  ...restProps
}) => {
  return (
    <Button
      contentStyle={{height}}
      mode={mode}
      style={[styles.button, buttonStyle]}
      {...restProps}>
      <Text style={[styles.text, textStyle]}>{name}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default AppButton;
