import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  Text,
  Animated,
  ToastAndroid,
  AsyncStorage,
  ToolbarAndroid,
  Picker,
  ImageBackground,
  FlatList
} from "react-native";
import Dimensions from "Dimensions";
import { Actions } from "react-native-router-flux";

import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import { LOGIN } from "../utils/constants";

import splash from "../images/splash.png";

class SplashComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ""
    };
  }

  componentWillMount() {
    setTimeout(() => {
      AsyncStorage.getItem("Token")
        .then(value => {
          if (value) {
            console.log("value", value);
            this.setState({ token: value });
            return Actions.main();
          } else Actions.auth();
        })
        .done();
    }, 3000);
  }

  checkLogin() {
    console.log("in check login " + new Date().toLocaleString());
    let that = this;
    setTimeout(() => {
      console.log("in timeout " + new Date().toLocaleString());
      if (that.state.token.trim() == "") {
        console.log("before auth" + new Date().toLocaleString());
        return <Login />;
      } else {
        console.log("before main " + new Date().toLocaleString());
        return <Dashboard />;
      }
    }, 3000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={splash}
          style={{
            flex: 1,
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT,
            resizeMode: "contain"
          }}
        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default SplashComponent;
