import React from 'react';
import {StyleSheet, Image, View, FlatList} from 'react-native';

//components
import Text from '../components/Text';
import SectionCard from './SectionCard';

const Section = ({item, title}) => {
  const logo = item.icon || null;
  const color = item.textColor;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: item.backgroundColor || '#000000'},
      ]}>
      <View style={{paddingHorizontal: 20}}>
        <Image resizeMode="center" style={styles.logo} source={logo} />
        <Text style={[styles.title, {color: color || '#FFFFFF'}]}>{title}</Text>
      </View>
      <FlatList
        style={{paddingHorizontal: 20}}
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
    paddingBottom: 50,
  },
  title: {
    fontWeight: '900',
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
    marginVertical: 15,
  },
});
