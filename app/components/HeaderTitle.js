import React from 'react';
import {StyleSheet, View} from 'react-native';

//components
import Text from '../components/Text';

const HeaderTitle = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#6B6B6B',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default HeaderTitle;
