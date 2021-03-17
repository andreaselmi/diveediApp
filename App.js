import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';

//Screen
import WelcomeScreen from './app/screens/WelcomeScreen';

//components
import StatusBar from './app/components/StatusBar';
import {colors} from './app/config/colors';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';

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
      <StatusBar />
      <LoginScreen />
    </PaperProvider>
  );
};

export default App;
