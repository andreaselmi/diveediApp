import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signInWithFacebook = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  //TODO sistemare gli errori
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
};

export const signInWithGoogle = async () => {
  // Get the users ID token
  const userInfo = await GoogleSignin.signIn();
  console.log(userInfo.user.name);

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};
