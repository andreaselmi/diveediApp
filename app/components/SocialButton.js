import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const SocialButton = ({
  buttonStyle,
  iconStyle,
  textStyle,
  text,
  iconPath,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Image source={iconPath} style={[styles.imageIconStyle, iconStyle]} />
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    width: '100%',
    borderRadius: 5,
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 20,
  },
});

export default SocialButton;
