import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  BackHandler,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";

import { MAIN, RECORDS, PROFILE, COMPANY } from "../../utils/constants";

export default class DrawerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  componentWillMount() {
    AsyncStorage.getItem("Name")
      .then(value => {
        if (value) {
          this.setState({ name: value });
        }
      })
      .done();
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert(
        "Exit App",
        "Are you sure you want to exit ?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => BackHandler.exitApp()
          }
        ],
        {
          cancelable: false
        }
      );
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  renderImage() {}

  showAlert = () => {
    Actions.drawerClose();
    Alert.alert(
      "Confirmation",
      "Are you sure you want to logout?",
      [
        {
          text: "No-Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes Logout"
        }
      ],
      { cancelable: false }
    );
  };

  openRecords() {
    //ToastAndroid.show(RECORDS, ToastAndroid.SHORT);
    this.props.drawerAction(RECORDS);
    this.props.refer.close();
  }

  openProfile() {
    //ToastAndroid.show(PROFILE, ToastAndroid.SHORT);
    this.props.drawerAction(PROFILE);
    this.props.refer.close();
  }
  openCompany() {
    this.props.drawerAction(COMPANY);
    this.props.refer.close();
  }

  render() {
    const {
      container,
      headerContainer,
      textStyle,
      headerTextStyle,
      itemStyle,
      navListContainer,
      imgStyle,
      drawerLogoImgStyle,
      drawerHoriBar
    } = styles;

    return (
      <ImageBackground
        source={require("../../images/drawer_bg.png")}
        style={container}
      >
        <View style={headerContainer}>
          <Image
            source={require("../../images/logo.png")}
            style={drawerLogoImgStyle}
          />
          <Text style={headerTextStyle}>{this.state.name}</Text>
        </View>
        <Image
          style={drawerHoriBar}
          source={require("../../images/drawer_bar.png")}
        />
        <View style={navListContainer}>
          <TouchableOpacity
            underlayColor={"#ddd"}
            onPress={() => this.openRecords()}
          >
            <View style={itemStyle}>
              <Image
                source={require("../../images/side_records.png")}
                style={imgStyle}
              />

              <Text style={textStyle}>Records</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor={"#ddd"}
            onPress={() => this.openProfile()}
          >
            <View style={itemStyle}>
              <Image
                source={require("../../images/setting.png")}
                style={imgStyle}
              />
              <Text style={textStyle}>My Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            underlayColor={"#ddd"}
            onPress={() => this.openCompany()}
          >
            <View style={itemStyle}>
              <Image
                source={require("../../images/company.png")}
                style={imgStyle}
              />
              <Text style={textStyle}>Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity underlayColor={"#ddd"}>
            <View style={itemStyle}>
              <Image
                source={require("../../images/side_password.png")}
                style={imgStyle}
              />
              <Text style={textStyle}>Change Password</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity underlayColor={"#ddd"}>
            <View style={itemStyle}>
              <Image
                source={require("../../images/logout.png")}
                style={imgStyle}
              />
              <Text style={textStyle} onPress={() => this.showAlert()}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#052a47"
  },
  headerContainer: {
    flex: 2,
    paddingLeft: 20,
    justifyContent: "flex-end"
  },
  headerTextStyle: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    marginEnd: 30
  },
  navListContainer: {
    flex: 4
  },
  itemStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 25,
    marginTop: 5
  },
  textStyle: {
    fontSize: 22,
    color: "#fff",
    paddingLeft: 10
  },
  circle: {
    borderRadius: 30,
    backgroundColor: "#ddd",
    margin: 12
  },
  imgStyle: {
    height: "80%",
    width: "20%",
    padding: 10,
    resizeMode: "contain"
  },
  drawerLogoImgStyle: {
    flex: 4,
    width: "80%",
    height: "50%",
    padding: 10,
    margin: 10,
    resizeMode: "contain"
  },
  drawerHoriBar: {
    flex: 1,
    width: "100%",
    height: "20%",
    resizeMode: "contain"
  }
});
