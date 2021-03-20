import React from 'react';
import {View, StyleSheet} from 'react-native';

//components
import Text from './Text';
import ImageContainer from './ImageContainer';

//config
import colors from '../config/colors';

const Card = ({title, imgUri, style, subtitle}) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <View style={styles.cardHeader}>
        <Text style={[{fontWeight: 'bold'}, styles.text]}>{title}</Text>
        <Text style={[{color: colors.placeholder}, styles.text]}>
          {subtitle}
        </Text>
      </View>
      {imgUri ? (
        <ImageContainer style={styles.cardImg} source={imgUri} />
      ) : null}
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
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  cardImg: {
    width: 130,
    height: 100,
  },
  text: {
    flexWrap: 'wrap',
  },
});
