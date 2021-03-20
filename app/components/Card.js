import React from 'react';
import {View, StyleSheet} from 'react-native';

//components
import Text from '../components/Text';
import ImageContainer from './ImageContainer';

//config
import colors from '../config/colors';

const Card = ({title, subtitle, imgUri}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <Text style={{color: colors.placeholder}}>{subtitle}</Text>
      </View>
      <ImageContainer style={styles.cardImg} source={imgUri} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  cardHeader: {
    maxWidth: 220,
    justifyContent: 'center',
  },
  cardImg: {
    width: 130,
    height: 100,
  },
});
