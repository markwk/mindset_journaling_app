import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import Dimensions from "Dimensions";

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: DEVICE_WIDTH - 50,
    height: 45,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 2,
    fontSize: 20,
    margin:10,
    paddingTop: 0,
    paddingBottom: 0,
    color: "#ffffff"
  },
  inputWrapper: {
    flex: 1
  },
  inlineImg: {
    position: "absolute",
    zIndex: 99,
    width: 18,
    margin:10,
    height: 18,
    left: 25,
    top: 15
  }
});
