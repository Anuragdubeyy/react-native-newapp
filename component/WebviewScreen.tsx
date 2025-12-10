import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebviewScreen({route}) {
  const {url} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: url}} />
    </SafeAreaView>
  );
}
