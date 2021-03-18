import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Group from '../components/Group';
import HeaderTitle from '../components/HeaderTitle';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';

//fakeData
import {groups} from '../config/dummy';

const MainScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <HeaderTitle text="Gruppi disponibili" />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          data={groups}
          renderItem={({item}) => <Group item={item} />}
          keyExtractor={(item) => item.id}
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
