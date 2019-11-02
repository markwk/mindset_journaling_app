import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TextInput from "react-native-material-textinput";
import Dimensions from "Dimensions";

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgViewStyle}>
          <Image style={styles.inlineImg} source={this.props.inLineImg} />
        </View>
        <View style={styles.inputViewStyle}>
          <TextInput
            //ref={firstnameRef => (this.firstnameRef = firstnameRef)}
            placeholder={this.props.placeholder}
            label={this.props.label}
            returnKeyType={this.props.returnKeyType}
            autoCorrect={this.props.autoCorrect}
            value={this.props.value}
            maxLength={this.props.maxLength}
            keyboardType={this.props.keyboardType}
            // onSubmitEditing={this.onSubmitFirstName.bind()}
            onChangeText={this.props.onChangeText}
            blurOnSubmit={this.props.blurOnSubmit}
          />
        </View>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: "row"
  },
  inputViewStyle: {
    flex: 0.9,
    marginLeft: 5,
    marginRight: 5
  },
  inputBoxStyle: {
    flex: 0.9,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    height: 45,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 2,
    fontSize: 20,
    margin: 10,
    paddingTop: 0,
    paddingBottom: 0,
    color: "#ffffff"
  },
  imgViewStyle: {
    flex: 0.1,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },
  inlineImg: {
    resizeMode: "contain",
    width: 30,
    height: 30
  }
});
