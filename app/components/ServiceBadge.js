import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Swipeout from 'react-native-swipeout';

const ServiceBadge = () => {
  let swipeoutBtns = [
    {
      text: 'Button',
    },
  ];
  return (
    <Swipeout right={swipeoutBtns}>
      <View>
        <Text>Swipe me left</Text>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({});

export default ServiceBadge;
