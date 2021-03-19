import React from 'react';
import {View, StyleSheet, FlatList, ScrollView, Button} from 'react-native';

//components
import Card from '../components/Card';
import HeaderTitle from '../components/HeaderTitle';
import Screen from '../components/Screen';
import Section from '../components/Section';

//fakeData
import {news} from '../config/dummy';
import {sections} from '../config/dummy';

const MainScreen = () => {
  const netflix = sections[0];

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <HeaderTitle style={{marginBottom: 10}} text="Novità" />
          {news.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </View>
        <View>
          <Section item={netflix} />
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default MainScreen;
