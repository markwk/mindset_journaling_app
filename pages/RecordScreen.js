import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import Voice from 'react-native-voice';


// var features = JSON.stringfy('./watson-features.js');
// var features = require('./watson-features.js');
// console.log(features);

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
    const data = new FormData();
    // data.append("text", "Australian Prime Minister Gillard lets loose on the leader of the opposition for his blatant and long practiced mysoginy. What I love about this rant is that it’s clearly not scripted. She had some points set out to make and then just let loose.");
    data.append("text", this.state.resultsthis.state.results);
    fetch(
      'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2019-07-12&features=emotion',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Basic YXBpa2V5Ok1CdEVzQ011Z2R6M1pIMDJaX1hwR3ZhZzJsVG5RWEwyMkZvWlpLRWc4S2Jl',
        // apikey:gjgAfvwP7ykuNvgIqcKvHdCTrEzmKi0sh5MRxvY2hvjj
      },
      body: data,
      //body: JSON.stringify({
      //  text: "Life is so difficult. I can't seem to change anything.",
      //  features: 'emotion',
      //}),
    }).then(response => {
      // console.log(response.text());
      return response.json()
    })
    .then(responseJson => {
      // console.log(responseJson);
      console.log(responseJson.emotion);
      let negativeEmotion: boolean;

      // console.log(responseJson.images[0]);
      // console.log(responseJson.images[0].objects);
    })
    .catch(error => {
      console.log("Got error");
      console.error(error);
    });
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
