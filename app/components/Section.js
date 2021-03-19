import React from 'react';
import {Button, StyleSheet, Image, View, FlatList} from 'react-native';

//components
import Text from '../components/Text';
import SectionCard from './SectionCard';

const Section = ({item}) => {
  return (
    <View style={[styles.container, {backgroundColor: 'black'}]}>
      <Image
        style={styles.logo}
        source={require('../assets/logos/netflix.png')}
      />
      <Text style={styles.header}>Ultime uscite</Text>
      <FlatList
        horizontal={true}
        data={item.latestReleases}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <SectionCard
            imageUri={item.cover}
            title={item.title}
            subtitle={item.releaseDate}
          />
        )}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header: {
    fontWeight: '900',
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginVertical: 15,
  },
});
