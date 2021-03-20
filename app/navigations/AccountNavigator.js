import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PlansScreen from '../screens/PlansScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Account">
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Payments" component={PaymentScreen} />
      <Stack.Screen name="Plans" component={PlansScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
