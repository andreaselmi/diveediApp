import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Group from '../containers/Group';
import HeaderTitle from '../components/HeaderTitle';

//components
import Screen from '../components/Screen';

//fakeData
import {groups} from '../config/dummy';

const MainScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <HeaderTitle text="Gruppi disponibili" />
        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={groups}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Group item={item} />}
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
