import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

//components
import Screen from '../components/Screen';
import HeaderTitle from '../components/HeaderTitle';

//containers
import PaymentInfo from '../containers/PaymentInfo';

//fakeData
import {payments} from '../config/dummy';

const PaymentScreen = () => {
  return (
    <Screen>
      <View style={{paddingHorizontal: 20}}>
        <HeaderTitle text="Storico pagamenti" />
        <FlatList
          data={payments}
          renderItem={PaymentInfo}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Screen>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
