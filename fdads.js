import React, {Component} from 'react';
import {View, Text, Button, Dimensions} from 'react-native';
import {
  BannerView,
  InterstitialAdManager,
  withNativeAd,
  AdIconView,
  TriggerableView,
  MediaView,
} from 'react-native-fbads';

const instID = '2215355445427186_2217540655208665';
const nativeAdPlacementId = '2122084034714087_2122088321380325';

const {width} = Dimensions.get('window');

class App extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column', borderWidth: 1}}>
        <MediaView style={{width: width - 42, height: width / 2}} />
        <View style={{flexDirection: 'row'}}>
          <AdIconView style={{width: 80, height: 80}} />
          <View
            style={{flexDirection: 'column', paddingHorizontal: 10, flex: 1}}>
            <TriggerableView style={{fontSize: 18}}>
              {this.props.nativeAd.headline}
            </TriggerableView>
            <Text>{this.props.nativeAd.sponsoredTranslation}</Text>
            <TriggerableView style={{fontSize: 10}}>
              {this.props.nativeAd.linkDescription}
            </TriggerableView>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TriggerableView
            style={{
              fontSize: 15,
              color: '#a70f0a',
              paddingVertical: 10,
              paddingHorizontal: 30,
              elevation: 3,
              borderTopWidth: 0,
              margin: 10,
              borderRadius: 6,
            }}>
            {this.props.nativeAd.callToActionText}
          </TriggerableView>
        </View>
      </View>
    );
  }
}

export default withNativeAd(App);
