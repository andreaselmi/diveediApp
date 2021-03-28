import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({visible = false, style}) {
  if (!visible) return null;

  return (
    <LottieView
      style={style}
      autoPlay
      loop
      source={require('../assets/loader.json')}
    />
  );
}

export default ActivityIndicator;
