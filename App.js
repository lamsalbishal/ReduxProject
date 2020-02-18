import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import FitImage from 'react-native-fit-image';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/251618.jpg',
            }}
            style={{height: 100, width: '100%', resizeMode: 'cover'}}
          />

          <FitImage
            indicator={false} // disable loading indicator
            indicatorColor="white" // react native colors or color codes like #919191
            indicatorSize="large" // (small | large) or integer
            source={{
              uri:
                'https://www.alessandromichelazzi.com/wp-content/uploads/2018/02/google-pixel-2-portrait-mode-18.jpg',
            }}
            style={styles.fitImage}
          />

          <FitImage
            source={{
              uri:
                'https://image.shutterstock.com/image-photo/big-small-orange-on-white-260nw-91599827.jpg',
            }}
            originalWidth={400}
            originalHeight={400}
            style={styles.fitImage}
          />

          <FitImage
            resizeMode="contain"
            source={{
              uri:
                'https://lh3.googleusercontent.com/proxy/AmhGA4eVSgqGZNSrjJP5ixtf1FjiGUPJiB5czCMaUIi8vQotQkciGjiZGzT4NeTz_4cBeEIuWuyztFjzzhbE9LheI3lNfXTzkG1hGkYZ2SRXTp07r54IzcZiGATBtTwUESt0bQypQM92usRgWs4',
            }}
            style={styles.fitImageWithSize}
          />

          <FitImage
            source={{
              uri:
                'https://facebook.github.io/react-native/docs/assets/favicon.png',
            }}
            style={styles.fitImageWithSize}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: '100%',
  },
});
