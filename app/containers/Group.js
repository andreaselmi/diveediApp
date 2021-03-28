import React from 'react';
import {Image, View, StyleSheet, Alert} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

//components
import Text from '../components/Text';
import colors from '../config/colors';
import TouchableContainer from '../components/TouchableContainer';

const Group = ({item}) => {
  const {owner, subscriptionOffered, available, total} = item;

  const imageSrc = item.avatar || require('../assets/avatar/placeholder.png');

  return (
    <TouchableContainer
      onPress={() =>
        Alert.alert(
          'Invio Richiesta',
          'Vuoi inviare una richiesta Diveedi al proprietario di questo gruppo?',
          [
            {
              text: 'Cancel',
              style: 'destructive',
              onPress: () => Alert.alert('Richiesta annullata'),
            },
            {
              text: 'Invia',
              onPress: () => Alert.alert('Richiesta inviata'),
            },
          ],
        )
      }>
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
    </TouchableContainer>
  );
};

const styles = StyleSheet.create({
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
