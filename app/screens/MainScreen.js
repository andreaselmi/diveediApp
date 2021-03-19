import React from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';

//components
import Card from '../components/Card';
import HeaderTitle from '../components/HeaderTitle';
import Screen from '../components/Screen';
import Section from '../components/Section';
import _ from 'lodash';

//fakeData
import {news} from '../config/dummy';
import {sections} from '../config/dummy';

const MainScreen = () => {
  const netflix = sections.find((section) => section.name === 'Netflix');
  const nowTV = sections.find((section) => section.name === 'NowTV');
  const disney = sections.find((section) => section.name === 'Disney+');

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <HeaderTitle style={{marginBottom: 10}} text="Novità" />
          {news.map((item) => (
            <Card
              key={item.id}
              title={_.get(item, 'title', 'Titolo non disponibile')}
              subtitle={_.get(item, 'date', 'Data non disponibile')}
              imgUri={item.image || require('../assets/news/placeholder.png')}
            />
          ))}
        </View>
        <View>
          <Section item={netflix} />
          <Section item={nowTV} />
          <Section item={disney} />
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
