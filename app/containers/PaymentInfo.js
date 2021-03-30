import React from 'react';
import {StyleSheet, View} from 'react-native';
import _ from 'lodash';

//components
import Text from '../components/Text';
import TouchableContainer from '../components/TouchableContainer';
import ImageContainer from '../components/ImageContainer';

//config
import colors from '../config/colors';

const PaymentInfo = ({item, onPress}) => {
  const {cost, transferType} = item;
  const imageUri = item.image || null;

  const checkCost = () => {
    if (cost) {
      if (transferType === 'accredit') {
        return <Text style={{color: 'green'}}>+ € {cost}</Text>;
      } else if (transferType === 'debit') {
        return <Text style={{color: 'red'}}>- € {cost}</Text>;
      } else return null;
    }
    return null;
  };

  return (
    <TouchableContainer activeOpacity={1} onPress={onPress}>
      <View style={styles.groupLabel}>
        {imageUri ? (
          <ImageContainer resizeMode="center" source={imageUri} />
        ) : null}
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>
            {_.get(item, 'serviceName', 'Non disponibile')}
          </Text>
          <Text style={{color: colors.placeholder}}>
            {_.get(item, 'date', 'Non disponibile')}
          </Text>
        </View>
      </View>
      <View style={{marginRight: 20}}>{checkCost()}</View>
    </TouchableContainer>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  groupLabel: {
    flexDirection: 'row',
  },
  textContainer: {
    maxWidth: 200,
    marginLeft: 20,
  },
});
