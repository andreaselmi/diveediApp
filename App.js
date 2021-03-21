import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';

//components
import StatusBar from './app/components/StatusBar';
import colors from './app/config/colors';
import Routes from './app/navigations/Routes';

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
      <Routes />
    </PaperProvider>
  );
};

export default App;
