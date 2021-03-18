import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Screen from '../components/Screen';

//components
import Text from '../components/Text';
import Button from '../components/Button';

//config
import colors from '../config/colors';

const WelcomeScreen = ({navigation}) => {
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
        <Image
          style={styles.bgImg}
          source={require('../assets/homebg.png')}
          resizeMode="cover"
        />
        <View style={styles.authContainer}>
          <Button
            name="Register"
            onPress={() => navigation.navigate('Register')}
          />
          <View style={styles.loginTextContainer}>
            <Text>Hai già un account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    marginTop: 80,
  },
  bgImg: {
    alignSelf: 'flex-end',
    height: 300,
    right: -20,
    width: 300,
  },
  headerImgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerImg: {
    height: 120,
    width: 80,
  },
  headerTextContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  headerText: {
    color: colors.primary,
    fontSize: 24,
  },
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  screenContainer: {
    padding: 20,
  },
});

export default WelcomeScreen;
