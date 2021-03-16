import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Screen from '../components/Screen';

//components
import Text from '../components/Text';
import Button from '../components/Button';

//config
import {colors} from '../config/colors';

const WelcomeScreen = () => {
  return (
    <Screen>
      <View style={styles.screenContainer}>
        <View style={styles.headerImgContainer}>
          <Image
            style={styles.headerImg}
            source={require('../assets/logoScritta.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            CONDIVIDI I SERVIZI CHE AMI, DIVIDI I COSTI
          </Text>
        </View>
        <View style={styles.bgImgContainer}>
          <Image
            style={styles.bgImg}
            source={require('../assets/homebg.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.authContainer}>
          <Button name="Register" onPress={() => console.log('Pressed')} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text>Hai già un account? </Text>
            <TouchableOpacity>
              <Text style={{color: colors.primary}}>Accedi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    marginTop: 70,
  },
  bgImgContainer: {
    width: '100%',
    alignItems: 'flex-end',
    right: -20,
  },
  bgImg: {
    width: 300,
    height: 300,
  },
  headerImgContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    width: 80,
    height: 120,
  },
  headerTextContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 35,
  },
  headerText: {
    color: colors.primary,
    fontSize: 24,
  },
  screenContainer: {
    padding: 20,
  },
});

export default WelcomeScreen;
