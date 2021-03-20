import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ImageContainer = ({imageUri, imageStyle, style, ...restProps}) => {
  return (
    <View style={[styles.imageContainer, style]}>
      <Image
        style={[styles.image, imageStyle]}
        source={imageUri}
        {...restProps}
      />
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    backgroundColor: 'transparent',
    height: 70,
    overflow: 'hidden',
    width: 70,
  },
});
