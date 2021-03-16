import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import Screen from '../components/Screen';
import Text from '../components/Text';
import Button from '../components/Button';
import FormField from '../components/FormField';

const RegisterScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Registrati per utilizzare l'app</Text>
        </View>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{nome: '', cognome: '', email: '', password: ''}}
            onSubmit={(values) => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <FormField
                  autoCorrect={false}
                  label="Nome"
                  mode="flat"
                  name="Nome"
                  onChangeText={handleChange('nome')}
                  onBlur={handleBlur('nome')}
                  placeholder="Nome"
                  value={values.nome}
                />

                <FormField
                  autoCorrect={false}
                  label="Cognome"
                  name="Cognome"
                  onChangeText={handleChange('cognome')}
                  onBlur={handleBlur('cognome')}
                  placeholder="Cognome"
                  value={values.cognome}
                />
                <FormField
                  autoCapitalize="none"
                  label="Email"
                  name="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email"
                  value={values.email}
                />
                <FormField
                  autoCapitalize="none"
                  label="Password"
                  name="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                />
                <Button name="Register" onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
          <Text>or</Text>
        </View>
        <View>
          <Button
            letterSpacing={0}
            mode="outlined"
            name="Continua con Google"
            textColor="black"
          />
          <Button
            letterSpacing={0}
            mode="outlined"
            name="Continua con Facebook"
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
});

export default RegisterScreen;
