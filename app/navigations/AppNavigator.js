import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

//stacknavigator
import GroupsScreen from '../screens/GroupsScreen';
import MainScreen from '../screens/MainScreen';
import colors from '../config/colors';
import MainButton from './MainButton';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: colors.black,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Groups') {
            iconName = focused ? 'people-sharp' : 'people-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Groups" component={GroupsScreen} />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/logobw.png')
                  : require('../assets/logooutline.png')
              }
              resizeMode="contain"
              style={{width: 60, height: 60}}
            />
          ),

          tabBarButton: (props) => <MainButton {...props} />,
        }}
      />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

// tabBarOptions={{
//     activeTintColor: colors.activeIconColor,
//     inactiveTintColor: colors.inactiveIconColor,
//     activeBackgroundColor: colors.backgroundCardColor,
//     inactiveBackgroundColor: colors.backgroundCardColor,
//     style: {
//       backgroundColor: colors.backgroundCardColor,
//       borderTopWidth: 0,
//     },
//   }}
