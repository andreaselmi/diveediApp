import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SectionCard = ({imageUri, title, subtitle, textColor = '#000000'}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={imageUri} />
      <View style={{maxWidth: 150}}>
        <Text style={[styles.title, {color: textColor}]}>{title}</Text>
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
    paddingTop: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
});
