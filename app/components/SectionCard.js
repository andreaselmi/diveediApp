import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SectionCard = ({imageUri, title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={imageUri} />
      <View style={{maxWidth: 150}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default SectionCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  img: {
    width: 150,
    height: 200,
  },
  title: {
    color: 'white',
  },
  subtitle: {
    color: 'gray',
  },
});
