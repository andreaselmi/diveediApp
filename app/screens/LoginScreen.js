import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import Screen from '../components/Screen';
import Text from '../components/Text';
import SocialButton from '../components/SocialButton';
import Button from '../components/Button';
import FormField from '../components/FormField';

import * as yup from 'yup';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const LoginScreen = () => {
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
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <FormField
                  autoCapitalize="none"
                  label="Email"
                  name="email"
                  keyboardType="email-address"
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
                <Button name="Login" onPress={handleSubmit} title="Submit" />
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
