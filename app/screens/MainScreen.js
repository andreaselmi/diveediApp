import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card';
import HeaderTitle from '../components/HeaderTitle';

import Screen from '../components/Screen';

//fakeData
import {news} from '../config/dummy';

const MainScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <HeaderTitle style={{marginBottom: 10}} text="Novità" />
        <FlatList
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Card item={item} />}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default MainScreen;
