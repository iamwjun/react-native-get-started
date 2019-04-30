import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Webview extends Component {
  render() {
    return (
      <WebView source={{ uri: 'http://192.168.98.18/canvas/qrcode.html' }} />
    );
  }
}