import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import Voice from 'react-native-voice';

export default class RecordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  };
onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  };
onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }
async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }
async _stopRecognition(e) {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }
async _saveEntry(e) {
    console.log(this.state.results)
  }
render () {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ marginTop: 50, fontSize: 25 }}>The Mindset Journal!</Text>
        <Button style={styles.transcript}
        onPress={this._startRecognition.bind(this)}
        title="Start">
        </Button>
        <Button 
          style={styles.transcript}
          onPress={this._stopRecognition.bind(this)}
          title="Stop">
        </Button>
        <Text style={styles.transcript}>
            Journal Text
        </Text>
        {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
        )}
        <Button 
          style={styles.transcript}
          onPress={this._saveEntry.bind(this)}
          title="Save">
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 30,
    width: 300,
    marginTop: 16,
  },
  transcript: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1
  },
});
