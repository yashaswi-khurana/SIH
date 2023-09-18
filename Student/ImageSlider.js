import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const images = [
  'C:\\Users\\Yashaswi\\OneDrive - pec.edu.in\\Dormsavior\\team-21\\App\\Student\\assets\\images (1).jpg',
  'C:\\Users\\Yashaswi\\OneDrive - pec.edu.in\\Dormsavior\\team-21\\App\\Student\\assets\\images.jpg',
  'C:\\Users\Yashaswi\\OneDrive - pec.edu.in\\Dormsavior\\team-21\\App\\Student\\assets\\download.jpg',
];

const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={3}
      >
        {images.map((image, index) => (
          <View key={index}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  wrapper: {},
  image: {
    width: 150,
    height: 150
  },
});

export default ImageSlider;
