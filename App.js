import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Screen
import AuthStack from './app/navigations/AuthStack';

//components
import StatusBar from './app/components/StatusBar';
import {colors} from './app/config/colors';

//appTheme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar />
        <AuthStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
