import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';
import SocialButton from '../components/SocialButton';
import Button from '../components/Button';
import FormField from '../components/FormField';

//auth
import {signInWithFacebook, signInWithGoogle} from '../auth/socialAuth';

let validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Inserisci il tuo nome')
    .min(2, 'Il nome deve essere di almeno 2 caratteri'),
  lastName: yup
    .string()
    .required('Inserisci il tuo cognome')
    .min(2, 'Il cognome deve essere di almeno 2 caratteri'),
  email: yup.string().email().required("L'email è un campo obbligatorio"),
  password: yup
    .string()
    .required('Inserisci la password')
    .min(6, 'La password deve avere almeno 6 caratteri'),
});

const RegisterScreen = ({navigation}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = async ({email, password, firstName, lastName}) => {
    setError(null);
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .set({
          createdAt: firestore.Timestamp.fromDate(new Date()),
          provider: 'Firebase',
          email: email,
          fullName: `${firstName} ${lastName}`,
          uid: auth().currentUser.uid,
          userImg: null,
        });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email già in uso');
      } else if (error.code === 'auth/invalid-password') {
        setError('Password non valida');
      }

      setLoading(false);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <IonIcon
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.navigate('Welcome')}
        />
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
            onPress={() => signInWithGoogle()}
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
    marginTop: 10,
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
