import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Text from '../components/Text';
import colors from '../config/colors';

const Group = ({item}) => {
  const {owner, subscriptionOffered, available, total} = item;

  const imageSrc = item.avatar
    ? item.avatar
    : require('../assets/avatar/placeholder.png');

  return (
    <TouchableOpacity
      onPress={() => console.log('pressed')}
      style={[styles.container, {borderBottomColor: colors.lightGray}]}>
      <View style={styles.groupLabel}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSrc} />
        </View>
        <View style={{maxWidth: 200}}>
          <Text style={{fontWeight: 'bold'}}>
            {subscriptionOffered} - {owner}
          </Text>
          <Text style={{color: colors.placeholder}}>
            {available && total
              ? available > 1
                ? `${available} posti su ${total} disponibili`
                : `${available} posto su ${total} disponibili`
              : 'Quantità di posti liberi non disponibile'}
          </Text>
        </View>
      </View>
      <View style={{marginRight: 20}}>
        <IonIcon name="md-arrow-redo" size={24} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  groupLabel: {
    flexDirection: 'row',
  },
  groupTitle: {
    fontWeight: 'bold',
  },
  groupSubTitle: {
    fontWeight: 'bold',
  },

  image: {
    width: 70,
    height: 70,
  },
  imageContainer: {
    backgroundColor: 'grey',
    borderRadius: 50,
    height: 70,
    marginRight: 20,
    overflow: 'hidden',
    width: 70,
  },
});

export default Group;
