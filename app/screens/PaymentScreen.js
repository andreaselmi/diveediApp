import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

//components
import Screen from '../components/Screen';
import HeaderTitle from '../components/HeaderTitle';
import Text from '../components/Text';

//containers
import PaymentInfo from '../containers/PaymentInfo';

//fakeData
import {movements} from '../config/dummy';

//config
import colors from '../config/colors';

const PaymentScreen = () => {
  const {previous, next} = movements;

  return (
    <Screen>
      <View style={{paddingHorizontal: 20}}>
        <HeaderTitle text="Storico" />
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={previous}
          renderItem={PaymentInfo}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.nextMovementsContainer}>
          <Text style={{fontWeight: 'bold'}}>Prossimi movimenti</Text>
          <View
            style={[
              styles.cardContainer,
              {backgroundColor: colors.medium},
            ]}></View>
        </View>
      </View>
    </Screen>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 25,
    height: 150,
    marginTop: 10,
    width: '100%',
  },
  list: {
    height: 475,
    flexGrow: 0,
  },
  logoContainer: {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
  },
  nextMovementsContainer: {
    marginTop: 10,
  },
});
