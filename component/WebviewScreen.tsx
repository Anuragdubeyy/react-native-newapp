import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebviewScreen({route}) {
  const {url} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
<WebView
  source={{uri: url}}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  mediaPlaybackRequiresUserAction={false}
  allowFileAccess={true}
  allowingReadAccessToURL={url}
  geolocationEnabled={true}
  allowsInlineMediaPlayback={true}
  androidCameraAccessEnabled={true}
  androidMicrophoneAccessEnabled={true}
  onPermissionRequest={event => {
      event.grant(event.resources); // <-- Grant camera/mic for WebView
    }}
/>
    </SafeAreaView>
  );
}
