import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PlansScreen from '../screens/PlansScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Account"
        component={AccountScreen}
      />
      <Stack.Screen
        options={{title: 'Movimenti'}}
        name="Payments"
        component={PaymentScreen}
      />
      <Stack.Screen
        options={{title: 'Piani'}}
        name="Plans"
        component={PlansScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
