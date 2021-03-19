import React from 'react';
import {StyleSheet, Image, View, FlatList, Button} from 'react-native';

//components
import Text from '../components/Text';
import SectionCard from './SectionCard';

const Section = ({item}) => {
  const logo = item.icon || null;
  const color = item.textColor;

  return (
    <View style={[styles.container, {backgroundColor: item.backgroundColor}]}>
      <Image resizeMode="center" style={styles.logo} source={logo} />
      <Text style={styles.header}>Ultime uscite</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={item.latestReleases}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <SectionCard
            imageUri={item.cover}
            title={item.title}
            subtitle={item.releaseDate}
            textColor={color}
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
    width: 100,
    height: 50,
    marginVertical: 15,
  },
});
