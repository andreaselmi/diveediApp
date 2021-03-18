import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';

const Option = ({iconName, iconStyle, onPress, style, text, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <IonIcon style={iconStyle} name={iconName} size={24} color="black" />
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <IonIcon name="chevron-forward" size={24} color={colors.placeholder} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
  },
});

export default Option;
