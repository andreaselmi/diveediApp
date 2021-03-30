import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';
import HeaderTitle from '../components/HeaderTitle';
import DisplayTotal from '../components/plans/DisplayTotal';

//fakeData
import {activePlans} from '../config/dummy';
import ServiceBadge from '../components/ServiceBadge';

const PlansScreen = ({navigation}) => {
  const debit = activePlans.debit;
  const accredit = activePlans.accredit;

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{paddingBottom: 50}}
        style={styles.container}>
        <HeaderTitle
          onPress={() => navigation.navigate('Account')}
          icon="chevron-back-outline"
          text="Spesa totale"
        />
        <DisplayTotal activePlans={debit} type="debit" />
        {debit.map((item) => (
          <ServiceBadge item={item} key={item.id} />
        ))}

        <HeaderTitle text="Incasso totale" />
        <DisplayTotal activePlans={accredit} type="accredit" />
        {accredit.map((item) => (
          <ServiceBadge item={item} key={item.id} />
        ))}
      </ScrollView>
    </Screen>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});
