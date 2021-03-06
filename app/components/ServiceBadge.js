import React from 'react';
import {StyleSheet, View} from 'react-native';
import _ from 'lodash';

//components
import ImageContainer from './ImageContainer';
import Text from './Text';

const ServiceBadge = ({item}) => {
  const imageUri = item.logo || null;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: item.viewStyle.backgroundColor},
      ]}>
      <View style={styles.logoContainer}>
        {imageUri ? (
          <ImageContainer resizeMode="center" source={imageUri} />
        ) : (
          <Text>{_.get(item, 'name', 'Non disponibile')}</Text>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={{color: item.viewStyle.textColor}}>
          €{_.get(item, 'cost', 'Non disponibile')}
        </Text>
      </View>
    </View>
  );
};

export default ServiceBadge;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoContainer: {
    marginHorizontal: 20,
  },
  textContainer: {
    justifyContent: 'center',
    marginRight: 20,
  },
});
