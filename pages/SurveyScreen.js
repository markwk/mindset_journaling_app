import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
 
export default class SurveyScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://markkoester.typeform.com/to/e3ASDf' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});