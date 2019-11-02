import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

import logoImg from "../.././images/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text  style={styles.text}>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 180,
    height: 180
  },
  text: {
    color: "white",
    backgroundColor: "transparent",
    margin: 20,
    fontSize: 20,
    
  }
});
