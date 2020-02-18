import React, {Component} from 'react';
import {View, Text} from 'react-native';
import App from './App';
import {NativeAdsManager, AdSettings} from 'react-native-fbads';

const adsManager = new NativeAdsManager('2122084034714087_2122088321380325');
AdSettings.clearTestDevices();
AdSettings.setLogLevel('debug');
AdSettings.addTestDevice(AdSettings.currentDeviceHash);

export default class AdView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <App adsManager={adsManager} adChoicePosition="bottomRight" />
      </View>
    );
  }
}
