import React from 'react';
import {View, TouchableOpacity} from 'react-native';

const MainButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: -20,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 100,
          height: 90,
          borderRadius: 50,
          backgroundColor: 'white',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
