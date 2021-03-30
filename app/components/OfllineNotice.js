import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import Text from './Text';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View
        style={[styles.container, {backgroundColor: 'rgba(235, 69, 33,  .8)'}]}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
});

export default OfflineNotice;
