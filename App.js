import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>A Christian puzza il culo</Text>
          <Icon name="rocket" size={30} color="#900" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
