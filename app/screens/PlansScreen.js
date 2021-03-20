import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Screen from '../components/Screen';

const PlansScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Plans Screen</Text>
        <View style={styles.spendingContainer}>{/* total spending */}</View>
        {/* TODO total plane active */}
        <View style={styles.incomesContainer}>{/*  total incomes */}</View>
        {/* TODO total plane active */}
      </View>
    </Screen>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
