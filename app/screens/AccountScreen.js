import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Button from '../components/Button';
import Option from '../components/Option';
import Screen from '../components/Screen';
import Text from '../components/Text';

//config
import colors from '../config/colors';

const MainScreen = ({navigation}) => {
  const currentUser = useSelector((state) => state.currentUser);

  const logout = async () => {
    await GoogleSignin.signOut();
    auth().signOut();
  };

  const profileImg = (img) => {
    if (img) {
      return <Image style={styles.userImg} source={{uri: img}} />;
    } else {
      return (
        <>
          <Image
            style={styles.logoImg}
            source={require('../assets/logobw.png')}
          />
          <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={{position: 'absolute', top: 20, right: 70}}>
            <IonIcon name="camera-outline" size={30} color={colors.dark} />
          </TouchableOpacity>
        </>
      );
    }
  };

  return (
    <Screen>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={styles.accountImgContainer}>
          {profileImg(currentUser.userImg)}
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>Andrea Selmi</Text>
          <Text style={{color: colors.placeholder}}>{currentUser.email}</Text>
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
    borderRadius: 100,
  },
  logoImg: {
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
