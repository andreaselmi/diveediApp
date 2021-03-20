import React from 'react';
import {StyleSheet, View} from 'react-native';

//components
import Text from '../components/Text';
import TouchableContainer from '../components/TouchableContainer';
import ImageContainer from '../components/ImageContainer';

//config
import colors from '../config/colors';

const PaymentInfo = ({item, onPress}) => {
  const {serviceName, date, cost, transferType} = item;
  const imageUri = item.image || null;

  const checkCost = () => {
    if (transferType === 'accredit') {
      return <Text style={{color: 'green'}}>+ € {cost}</Text>;
    } else {
      return <Text style={{color: 'red'}}>- € {cost}</Text>;
    }
  };

  return (
    <TouchableContainer activeOpacity={1} onPress={onPress}>
      <View style={styles.groupLabel}>
        {imageUri ? (
          <ImageContainer resizeMode="center" source={imageUri} />
        ) : null}
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{serviceName}</Text>
          <Text style={{color: colors.placeholder}}>{date}</Text>
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
