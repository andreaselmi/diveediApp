import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../Text';

import colors from '../../config/colors';

const Card = ({activePlans, period = 'month', type}) => {
  const checkTotal = () => {
    let total = 0;
    activePlans.map((plan) => {
      total += parseFloat(plan.cost);
    });
    return `€${total}`;
  };

  return (
    <View style={[styles.spendingContainer, {backgroundColor: colors.medium}]}>
      <View style={[styles.spendingTextContainer]}>
        <Text
          style={{
            width: 80,
            color: colors.placeholder,
            textAlign: 'center',
          }}>
          {type === 'debit' && 'Spesa totale'}
          {type === 'accredit' && 'Incassi totali'}
        </Text>
      </View>
      <View style={styles.spendingTextContainer}>
        <Text style={{fontSize: 32, color: colors.white, fontWeight: 'bold'}}>
          {checkTotal()}
        </Text>
      </View>
      <View style={styles.spendingTextContainer}>
        <Text
          style={{
            width: 80,
            color: colors.placeholder,
            textAlign: 'center',
          }}>
          {period === 'month' && 'Al mese'}
          {period === 'weekly' && 'Alla settimana'}
          {period === 'year' && "All'anno"}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  spendingContainer: {
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  spendingTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
