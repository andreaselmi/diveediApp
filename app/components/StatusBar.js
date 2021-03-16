import React from 'react';
import {StatusBar} from 'react-native';

export default function AppStatusBar() {
  return (
    <StatusBar
      barStyle={'dark-content'}
      translucent
      backgroundColor="transparent"
    />
  );
}
