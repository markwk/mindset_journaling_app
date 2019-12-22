/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Timeline from 'react-native-timeline-flatlist'

export default class CalendarScreen extends Component {

  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)

    this.data = [
      {
        time: '09:00', 
        title: 'Welcome to Zen Journey', 
        description: 'A journey of a thousand miles begins with a single step - Confucius ',
        lineColor:'#009688', 
        icon: require('../images/archery.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '9:15', 
        title: 'Took Growth Mindset Survey', 
        description: 'In a growth mindset, people believe that their most basic abilities can be developed through dedication and hard work—brains and talent are just the starting point. This view creates a love of learning and a resilience that is essential for great accomplishment. -  Carol Dweck', 
        icon: require('../images/badminton.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '12:00', 
        title: 'Lunch', 
        icon: require('../images/lunch.png'),
      },
      {
        time: '14:00', 
        title: 'A Social Moment', 
        description: 'Take a break from your busy-ness and work to say hello to a collegue or call a loved one. ',
        lineColor:'#009688', 
        icon: require('../images/soccer.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '16:30', 
        title: 'Go to Fitness center', 
        description: 'Look out for the Best Gym & Fitness Centers around me :)', 
        icon: require('../images/dumbbell.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ]
    this.state = {selected: null}
  } 

  onEventPress(data){
    this.setState({selected: data})
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSelected()}
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}                    
          separator={false}
          detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10}}
          columnFormat='two-column'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:45,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});