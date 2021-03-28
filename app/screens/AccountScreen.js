import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

//auth
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

//components
import Button from '../components/Button';
import Option from '../components/Option';
import Screen from '../components/Screen';
import Text from '../components/Text';
import ActivityIndicator from '../components/ActivityIndicator';

//config
import colors from '../config/colors';

//store
import {useSelector, useDispatch} from 'react-redux';
import {setUserImg} from '../store/user';

const MainScreen = ({navigation}) => {
  const currentUser = useSelector((state) => state.currentUser);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const dispatch = useDispatch();

  const logout = async () => {
    await GoogleSignin.signOut();
    auth().signOut();
  };

  const pickImg = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }

    //TODO

    // let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // // Add timestamp to File Name
    // const extension = filename.split('.').pop();
    // const name = filename.split('.').slice(0, -1).join('.');
    // filename = name + Date.now() + '.' + extension;

    setIsLoading(true);

    const uploadUri = image;
    const storageRef = storage().ref(`photos/${currentUser.uid}`);
    const task = storageRef.putFile(uploadUri);

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const profileImg = (img) => {
    if (img) {
      return <Image style={styles.userImg} source={{uri: img}} />;
    } else {
      return (
        <Image
          style={styles.logoImg}
          source={require('../assets/logobw.png')}
        />
      );
    }
  };

  const storedImg = async () => {
    let url = await uploadImage();
    dispatch(
      setUserImg({
        userImg: url,
      }),
    );
    await firestore().collection('users').doc(auth().currentUser.uid).update({
      userImg: url,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (image) storedImg();
  }, [image]);

  return (
    <Screen>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={styles.accountImgContainer}>
          {isLoading ? (
            <ActivityIndicator visible={true} />
          ) : (
            profileImg(currentUser.userImg || image || null)
          )}
          {!isLoading && currentUser.provider === 'Firebase' && (
            <TouchableOpacity
              onPress={() => pickImg()}
              style={[
                styles.pickerImgIcon,
                {backgroundColor: colors.lightGray},
              ]}>
              <IonIcon name="camera" size={24} color={colors.dark} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{currentUser.fullName}</Text>
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
  pickerImgIcon: {
    alignItems: 'center',
    borderRadius: 50,
    bottom: 20,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    right: 120,
    width: 40,
  },
  userImg: {
    borderRadius: 100,
    height: 150,
    width: 150,
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
