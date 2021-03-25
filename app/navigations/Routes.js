import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import AuthStack from './AuthStack';
import AppNavigator from './AppNavigator';

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

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
