import React from 'react';
import {StyleSheet, View} from 'react-native';
import Swipeout from 'react-native-swipeout';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';
import HeaderTitle from '../components/HeaderTitle';
import DisplayTotal from '../components/plans/DisplayTotal';

//config
import colors from '../config/colors';

//fakeData
import {activePlans} from '../config/dummy';

const PlansScreen = () => {
  const debit = activePlans.debit;
  const accredit = activePlans.accredit;

  var swipeoutBtns = [
    {
      text: 'Button',
    },
  ];

  return (
    <Screen>
      <View style={styles.container}>
        <HeaderTitle text="Spesa totale" />
        <DisplayTotal activePlans={debit} type="debit" />
        <Swipeout right={swipeoutBtns}>
          <View>
            <Text>Swipe me left</Text>
          </View>
        </Swipeout>
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
