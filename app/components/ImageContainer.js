import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ImageContainer = ({
  imageUri,
  imageStyle,
  style,
  resizeMode = 'center',
  ...restProps
}) => {
  return (
    <View style={[styles.imageContainer, style]}>
      <Image
        style={[styles.image, imageStyle]}
        resizeMode={resizeMode}
        source={imageUri}
        {...restProps}
      />
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
  imageContainer: {
    backgroundColor: 'transparent',
    height: 70,
    marginRight: 20,
    overflow: 'hidden',
    width: 70,
  },
});
