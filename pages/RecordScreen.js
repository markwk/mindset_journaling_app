import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import Voice from 'react-native-voice';

console.disableYellowBox = true;

export default class RecordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      emotions: [],
      emotional_detection: '',
      joy: null,
      disgust: null,
      fear: null,
      sadness: null,
      anger: null
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
    this.setState({
      emotional_detection: 'Unkown',
    });
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
    // Happy Example
    // data.append("text", "On a holiday, I was sitting in my room after finishing my homework. As my friends were away to hill stations, I was feeling very lonely. I watched the cars and other vehicles passing by and wished that like my friends, I would also have been travelling or passing my time. While my mind was occupied with thoughts of holiday and having fun with my friends, the doorbell rang. I ran to answer it and found the postman with a parcel and a letter for me. I signed the paper and took the parcel. My hands were itching to open the packet out of intense curiosity. I ripped the parcel open and found a beautiful tape recorder in it. The parcel has been sent from the U.S. and the letter along with it was from my uncle who had sent me a wonderful gift.");
    // angry
    //data.append("text", "The kind of blasphemy you people run really makes me sick, I mean really sick. For instance in your February 28 issue, right on page 14, your interviewer asks Lily Tomlin, Who's the funniest person you ever met? and she answers right away, without batting an eye, Oh, God. Well I don't believe Lily Tomlin ever met God. And I don't believe God is funny. You're sick, that's all I can say. Really really sick.")
    data.append("text", (this.state.results).toString());
    console.log(data);
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
    }).then(response => {
      // console.log(response.text());
      return response.json()
    })
    .then(responseJson => {
      let emotions = responseJson.emotion.document.emotion
      console.log(emotions);
      this.setState({
        joy: emotions.joy,
        disgust: emotions.disgust,
        fear: emotions.fear,
        sadness: emotions.sadness,
        anger: emotions.anger
      });
      // console.log(responseJson);
      // console.log(responseJson.emotion);
      // console.log(responseJson.emotion.document.emotion.anger); // disgust, joy, fear, joy, sadness
     // let emotions = responseJson.emotion.document.emotion //.anger;
    })
    .catch(error => {
      console.log("Got error");
      console.error(error);
    });
  }
render () {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ marginTop: 50, fontSize: 25 }}>My Journal, My Mirror</Text>
        {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}
        </Text>
        )}
        <View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 150}}>
        <TouchableOpacity style={styles.button}
        onPress={this._startRecognition.bind(this)}
        >
        <Text>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={this._stopRecognition.bind(this)}
          >
        <Text>Stop</Text>  
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={this._saveEntry.bind(this)}
          >
        <Text>Save</Text>  
        </TouchableOpacity>
        <Text style={{marginTop: 15, fontSize: 20}}>Growth Mindset Analysis{'\u00A9'}:</Text>
        <Text style={{fontSize: 25, color: '#13103F'}}>
        {this.state.joy > 0.5? <Text>So happy!</Text>: null }
        {this.state.anger > 0.4? <Text>So angry!</Text>: null }
        {this.state.fear > 0.3? <Text>So fearful!</Text>: null }
        {this.state.sadness > 0.3? <Text>So sad!</Text>: null }
        </Text>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#71D1CD',
    padding: 10,
    width: 350,
    marginTop: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
},
  transcript: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    marginBottom: 1,
    marginTop: 25,
  },
});
