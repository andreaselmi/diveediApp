import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import * as yup from 'yup';

//components
import Button from '../components/Button';
import FormField from '../components/FormField';
import Screen from '../components/Screen';
import SocialButton from '../components/SocialButton';
import Text from '../components/Text';

//config
import colors from '../config/colors';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const LoginScreen = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = ({email, password}) => {
    setLoading(true);
    setError(null);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setError('Nessun utente trovato!');
        } else if (error.code === 'auth/wrong-password') {
          setError('Password errata!');
        } else {
          setError('Impossibile accedere');
        }
        setLoading(false);
      });
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Accedi con il tuo account Diveedi
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={login}
            validationSchema={validationSchema}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <FormField
                  autoCapitalize="none"
                  keyboardType="email-address"
                  label="Email"
                  name="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email"
                  value={values.email}
                />
                <FormField
                  autoCapitalize="none"
                  label="Password"
                  name="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                />
                {error && (
                  <Text style={{color: colors.danger, top: -10}}>{error}</Text>
                )}
                <Button
                  disabled={loading}
                  name="Login"
                  onPress={handleSubmit}
                  title="Submit"
                />
              </View>
            )}
          </Formik>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
          <Text>or</Text>
        </View>
        <View style={styles.socialButtonContainers}>
          <SocialButton
            text="Sign in with Google"
            iconPath={require('../assets/icons/google.png')}
            buttonStyle={styles.googleButton}
          />
          <SocialButton
            text="Sign in with Facebook"
            iconPath={require('../assets/icons/facebook.png')}
            buttonStyle={styles.facebookButton}
            textStyle={styles.facebookButtonText}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  formContainer: {
    marginTop: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 28,
    width: '60%',
  },
  headerTextContainer: {
    marginTop: 20,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  googleButton: {
    backgroundColor: '#DC4E41',
  },
  socialButtonContainers: {
    height: 120,
    justifyContent: 'space-between',
  },
});

export default LoginScreen;
