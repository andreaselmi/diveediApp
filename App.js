import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

//components
import StatusBar from './app/components/StatusBar';
import colors from './app/config/colors';
import Routes from './app/navigations/Routes';

//store
import configureStore from './app/store/configureStore';

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
  const store = configureStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar />
        <Routes />
      </PaperProvider>
    </Provider>
  );
};

export default App;
