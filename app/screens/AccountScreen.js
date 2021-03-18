import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Option from '../components/Option';

import Screen from '../components/Screen';
import Text from '../components/Text';
import Button from '../components/Button';

//config
import colors from '../config/colors';

const MainScreen = () => {
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
          <Option iconName="calendar" text="Storico Pagamenti" />
          <Option
            style={{borderBottomColor: '#000', borderBottomWidth: 1}}
            iconName="albums"
            text="Piani Attivi"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button name="Logout" onPress={() => console.log('Pressed')} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  accountImgContainer: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 50,
  },

  optionsContainer: {
    marginTop: 50,
  },
  userImg: {
    width: 150,
    height: 150,
  },
  userInfoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default MainScreen;
