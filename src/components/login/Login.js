import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  ToastAndroid,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Dimensions from "Dimensions";
import Logo from "../common/Logo";
import UserInput from "../common/UserInput";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";
// export const loginUser = ({ email, password }) => {
import { emailChanged, passwordChanged, loginUser } from "../../actions";

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESSS,
  LOGIN_FAIL
} from "../../utils/constants";

import bgSrc from "../.././images/bg.png";
import usernameImg from "../.././images/username.png";
import passwordImg from "../.././images/password.png";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  onEmailChanged(text) {
    console.log("email", text);
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    console.log("password", text);
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    console.log("email, password", email, password);
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View
          style={{ marginLeft: 25, marginRight: 25, backgroundColor: "white" }}
        >
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  setDataInLocal(next) {
    console.log("this.props.user", next);
    console.log("next.email", next.email);
    // ToastAndroid.show(next.email, ToastAndroid.LONG);
    AsyncStorage.setItem("Name", next.email);
    //ToastAndroid.show(next.password, ToastAndroid.LONG);
    console.log("next.password", next.password);
    AsyncStorage.setItem("Password", next.password);
    //ToastAndroid.show(next.user.d, ToastAndroid.LONG);
    console.log("next.user.d", next.user.d);
    AsyncStorage.setItem("Token", next.user.d);
    Actions.main();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user != "" && nextProps.user != undefined) {
      if (nextProps.user.s) {
        this.setDataInLocal(nextProps);
      } else {
        ToastAndroid.show(nextProps.user.m, ToastAndroid.LONG);
      }
    } else {
      console.log("Blank");
    }

    // nextProps.user
    //   ? this.setDataInLocal(JSON.stringify(nextProps))
    //   : console.log("Blank");
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.picture} source={bgSrc}>
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 5 }}
          >
            <Logo />

            <UserInput
              value={this.props.email}
              source={usernameImg}
              placeholder="Username"
              autoCapitalize={"none"}
              returnKeyType={"done"}
              autoCorrect={false}
              onChangeText={this.onEmailChanged.bind(this)}
            />
            <UserInput
              value={this.props.password}
              source={passwordImg}
              secureTextEntry
              placeholder="Password"
              returnKeyType={"done"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={this.onPasswordChanged.bind(this)}
            />
            {this.renderError()}
            <TouchableOpacity
              onPress={this.onButtonPress.bind(this)}
              style={styles.button}
              activeOpacity={1}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>

            <Text style={styles.forgetPassText}>Forget Password </Text>
            <View
              style={{
                marginTop: 30,
                justifyContent: "center",
                flex: 1,
                flexDirection: "row"
              }}
            >
              <Text style={styles.signupText}>Not Register yet?</Text>
              <Text
                onPress={() => Actions.signup()}
                style={styles.signupYellowText}
              >
                Register Now.
              </Text>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const MARGIN = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  formcontainer: {
    flex: 1,
    flexDirection: "column"
  },
  picture: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    resizeMode: "cover"
  },
  button: {
    width: DEVICE_WIDTH - 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#F9A602",
    height: MARGIN,
    borderRadius: 2,
    zIndex: 100
  },
  text: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
    fontSize: 20,
    paddingTop: 0,
    paddingBottom: 0
  },
  forgetPassText: {
    color: "white",
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 15,
    marginTop: 20,
    alignSelf: "center",
    paddingTop: 0,
    paddingBottom: 0
  },
  signupYellowText: {
    marginTop: 20,
    color: "#F9A602",
    backgroundColor: "transparent",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 0,
    paddingBottom: 0
  },
  signupText: {
    marginTop: 20,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 0,
    paddingBottom: 0
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
});

// const mapDispatchToProps = dispatch => {
//   return {
//     emailChanged: text => dispatch({ type: EMAIL_CHANGED }),
//     passwordChanged: text => dispatch({ type: PASSWORD_CHANGED })
//   };
// };

const mapsStateToProps = ({ auth }) => {
  const { email, password, error, user } = auth;
  return { email, password, error, user };
};

export default connect(
  mapsStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(Login);
