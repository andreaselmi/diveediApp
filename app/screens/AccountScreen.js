import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

//components
import Button from '../components/Button';
import Option from '../components/Option';
import Screen from '../components/Screen';
import Text from '../components/Text';

//config
import colors from '../config/colors';

const MainScreen = ({navigation}) => {
  const logout = () => {
    auth().signOut();
  };

  return (
    <Screen>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={styles.accountImgContainer}>
          <Image
            style={styles.userImg}
            source={require('../assets/logobw.png')}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Andrea Selmi</Text>
          <Text style={{color: colors.placeholder}}>
            andreaselmi90@gmail.com
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          <Option
            iconName="calendar"
            onPress={() => navigation.navigate('Payments')}
            text="Storico Pagamenti"
          />
          <Option
            iconName="albums"
            style={{borderBottomColor: '#000', borderBottomWidth: 1}}
            text="Piani Attivi"
            onPress={() => navigation.navigate('Plans')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button name="Logout" onPress={() => logout()} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  accountImgContainer: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    marginBottom: 50,
    marginTop: 'auto',
  },

  optionsContainer: {
    marginTop: 50,
  },
  userImg: {
    height: 150,
    width: 150,
  },
  userInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  userName: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default MainScreen;
