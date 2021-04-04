import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

//components
import Button from '../components/Button';
import Screen from '../components/Screen';
import HeaderTitle from '../components/HeaderTitle';
import Text from '../components/Text';

//containers
import PaymentInfo from '../containers/PaymentInfo';

//config
import colors from '../config/colors';
import ImageContainer from '../components/ImageContainer';

//fakeData
import {movements} from '../config/dummy';

const PaymentScreen = ({navigation}) => {
  const {previous, next} = movements;
  const nextLogo = next ? next.length > 0 && next[0].image : null;

  const showsPreviousMovement = () => {
    if (!previous) return null;

    if (previous.length === 0) {
      return (
        <Text
          style={{
            marginVertical: 20,
            color: colors.placeholder,
          }}>
          Non ci sono movimenti passati
        </Text>
      );
    } else {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={previous}
          renderItem={({item}) => <PaymentInfo item={item} />}
          keyExtractor={(item) => item.id}
        />
      );
    }
  };

  const showsNextMovement = () => {
    if (!next) return null;

    if (next.length === 0) {
      return (
        <Text
          style={{
            marginVertical: 20,
            color: colors.placeholder,
          }}>
          Non ci sono movimenti futuri
        </Text>
      );
    } else {
      return (
        <View style={[styles.cardContainer, {backgroundColor: colors.dark}]}>
          <View style={styles.nextMovHeader}>
            <ImageContainer
              style={styles.nextMovImg}
              resizeMode="center"
              source={nextLogo}
            />
            <Text style={{color: colors.placeholder}}>{next[0].date}</Text>
            <Text style={{color: colors.placeholder}}>
              {next[0].transferType === 'accredit'
                ? `+ €${next[0].cost}`
                : `- €${next[0].cost}`}
            </Text>
          </View>
          <View>
            <Button
              buttonStyle={[
                styles.nextMovButton,
                {borderColor: colors.primary},
              ]}
              mode="outlined"
              name="Gestisci"
              onPress={() => console.log('pressed')}
              textStyle={styles.nextMovButtonText}
            />
            <Button
              buttonStyle={[
                styles.nextMovButton,
                {borderColor: colors.primary},
              ]}
              mode="outlined"
              name="Cancella"
              onPress={() => console.log('pressed')}
              textStyle={styles.nextMovButtonText}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <Screen>
      <View style={{paddingHorizontal: 20}}>
        <HeaderTitle
          onPress={() => navigation.navigate('Account')}
          icon="chevron-back-outline"
          text="Storico"
        />
        {showsPreviousMovement()}
        <View style={styles.nextMovContainer}>
          <HeaderTitle text="Prossimo movimento" />
          {showsNextMovement()}
        </View>
      </View>
    </Screen>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  list: {
    flexGrow: 0,
    height: 400,
  },
  logoContainer: {
    backgroundColor: 'grey',
    height: 50,
    width: 50,
  },
  nextMovButton: {
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 5,
    width: 150,
  },
  nextMovButtonText: {
    fontSize: 12,
  },
  nextMovContainer: {
    marginTop: 30,
  },
  nextMovHeader: {
    alignItems: 'center',
    width: 150,
  },
  nextMovImg: {
    width: 150,
  },
});
