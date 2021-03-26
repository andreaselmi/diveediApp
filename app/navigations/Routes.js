import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';

import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';

// ...

//navigators
import AuthStack from './AuthStack';
import AppNavigator from './AppNavigator';

//store
import {setCurrentUser, setNoUser, setUserImg} from '../store/user';

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  //Create response callback.
  const _responseInfoCallback = (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      dispatch(
        setUserImg({
          userImg: result.picture.data.url,
        }),
      );
      return result;
    }
  };
  // Create a graph request asking for user information with a callback to handle the response.
  const infoRequest = new GraphRequest(
    '/me',
    {
      parameters: {
        fields: {
          string: 'picture.type(large)',
        },
      },
    },
    _responseInfoCallback,
  );

  const onAuthStateChanged = async (user) => {
    setUser(user);

    if (user) {
      const provider = user.providerData[0].providerId;
      if (provider === 'google.com') {
        dispatch(
          setCurrentUser({
            email: user.email,
            uid: user.uid,
            fullName: user.displayName,
            userImg: user.photoURL,
          }),
        );
      } else if (provider === 'facebook.com') {
        new GraphRequestManager().addRequest(infoRequest).start();

        dispatch(
          setCurrentUser({
            email: user.email,
            uid: user.uid,
            fullName: user.displayName,
          }),
        );
      } else {
        const userData = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();

        const {email, uid, fullName, userImg} = userData._data;

        dispatch(
          setCurrentUser({
            email,
            uid,
            fullName,
            userImg,
          }),
        );
      }
    } else {
      dispatch(setNoUser());
    }

    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '704312833987-fm3vsdf6kkqtvff9i1iuqs62h114kql1.apps.googleusercontent.com',
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
