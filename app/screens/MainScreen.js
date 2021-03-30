import React from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import _ from 'lodash';

//components
import Card from '../components/Card';
import HeaderTitle from '../components/HeaderTitle';
import Screen from '../components/Screen';
//containers
import Section from '../containers/Section';

//fakeData
import {news} from '../config/dummy';
import {sections} from '../config/dummy';
import OfflineNotice from '../components/OfllineNotice';

const MainScreen = () => {
  return (
    <Screen>
      <OfflineNotice />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          {sections.map((section) => (
            <Section key={section.id} title="Ultime uscite" item={section} />
          ))}
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
