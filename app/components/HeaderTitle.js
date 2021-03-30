import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Text from '../components/Text';

const HeaderTitle = ({icon, onPress, text, style}) => {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <TouchableOpacity onPress={onPress}>
          <IonIcon style={styles.icon} name={icon} size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#6B6B6B',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default HeaderTitle;
