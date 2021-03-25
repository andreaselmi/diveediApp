import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';
import SocialButton from '../components/SocialButton';
import Button from '../components/Button';
import FormField from '../components/FormField';

//auth
import {signInWithFacebook} from '../auth/socialAuth';

let validationSchema = yup.object().shape({
  // firstName: yup.string().required().min(2),
  // lastName: yup.string().email().required().min(2),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const RegisterScreen = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = ({email, password}) => {
    setError(null);
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('Email già in uso');
        } else if (error.code === 'auth/invalid-password') {
          setError('Password non valida');
        }

        setLoading(false);
      });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Registrati per utilizzare l'app</Text>
        </View>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            onSubmit={register}
            validationSchema={validationSchema}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <FormField
                  autoCorrect={false}
                  label="First Name"
                  mode="flat"
                  name="firstName"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  placeholder="First Name"
                  value={values.firstName}
                />

                <FormField
                  autoCorrect={false}
                  label="Last Name"
                  name="lastName"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  placeholder="Last Name"
                  value={values.lastName}
                />
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
                {error && (
                  <Text style={{color: colors.danger, top: -10}}>{error}</Text>
                )}
                <Button
                  disabled={loading}
                  name="Register"
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
            buttonStyle={styles.googleButton}
            iconPath={require('../assets/icons/google.png')}
            text="Continue with Google"
          />
          <SocialButton
            onPress={() => signInWithFacebook()}
            text="Continue with Facebook"
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

export default RegisterScreen;
