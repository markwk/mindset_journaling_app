import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  Text,
  ToastAndroid,
  AsyncStorage,
  ToolbarAndroid,
  ImageBackground,
  FlatList
} from "react-native";
import TextInput from "react-native-material-textinput";

import Drawer from "react-native-drawer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Dimensions from "Dimensions";
import { fetchProfile } from "../../actions";

import { APP_COLOR } from "../../utils/constants";
import userImg from "../../images/user.png";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      middlename: "",
      lastname: "",
      employeeId: "",
      mobile: "",
      office: "",
      home: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      createdRecords: "",
      companyName: "",
      planName: "",
      expiryDate: "",
      remainingTransaction: ""
    };
  }

  onSubmitFirstName() {
    // this.middlenameRef.focus();
  }

  componentWillReceiveProps(nextProps) {
    profile: {
      (firstname = "Saurabh"), (lastname = "Gavhane"), (middlename = "");
    }
  }

  onButtonPress() {
    ToastAndroid.show("Button pressed", ToastAndroid.LONG);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5 }}
        >
          <View style={styles.container}>
            {/* firstname */}
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                ref={firstnameRef => (this.firstnameRef = firstnameRef)}
                placeholder="Firstname"
                label="Firstname"
                returnKeyType="next"
                autoCorrect={false}
                value={this.state.firstname}
                // onSubmitEditing={this.onSubmitFirstName.bind()}
                onChangeText={firstname => this.setState({ firstname })}
                blurOnSubmit={false}
              />
            </View>
          </View>
          {/* Middlename */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                ref={middlenameRef => (this.middlenameRef = middlenameRef)}
                placeholder="Middlename"
                label="Middlename"
                returnKeyType="go"
                value={this.state.middlename}
                onChangeText={middlename => this.setState({ middlename })}
              />
            </View>
          </View>

          {/* lastname */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                ref="lastnameRef"
                label="Lastname"
                placeholder="Lastname"
                value={this.state.lastname}
                onChangeText={lastname => this.setState({ lastname })}
              />
            </View>
          </View>

          {/* Employee Id */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Employee Id"
                placeholder="Employee Id"
                value={this.state.employeeId}
                onChangeText={employeeId => this.setState({ employeeId })}
              />
            </View>
          </View>

          {/* Mobile */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Mobile"
                placeholder="Mobile"
                keyboardType="number-pad"
                value={this.state.mobile}
                onChangeText={mobile => this.setState({ mobile })}
              />
            </View>
          </View>

          {/* Mobile */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Office"
                placeholder="Office"
                keyboardType="number-pad"
                value={this.state.office}
                onChangeText={office => this.setState({ office })}
              />
            </View>
          </View>

          {/* Mobile */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Home"
                placeholder="Home"
                keyboardType="number-pad"
                value={this.state.home}
                onChangeText={home => this.setState({ home })}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Email"
                placeholder="Email"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </View>
          </View>

          {/* Address1 */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Address 1"
                placeholder="Address 1"
                value={this.state.address1}
                onChangeText={address1 => this.setState({ address1 })}
              />
            </View>
          </View>

          {/* Address2 */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Address 2"
                placeholder="Address 2"
                value={this.state.address2}
                onChangeText={address2 => this.setState({ address2 })}
              />
            </View>
          </View>

          {/* City */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="City"
                placeholder="City"
                value={this.state.city}
                onChangeText={city => this.setState({ city })}
              />
            </View>
          </View>

          {/* State */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                //autoCapitalize="characters"
                label="State"
                placeholder="State"
                value={this.state.state}
                
                onChangeText={state =>
                  this.setState({ state: state.toUpperCase() })
                }
              />
            </View>
          </View>

          {/* ZipCode */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Zip Code"
                placeholder="Zip Code"
                value={this.state.zipcode}
                onChangeText={zipcode => this.setState({ zipcode })}
              />
            </View>
          </View>

          {/* Created Records */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Total Created Records"
                placeholder="Total Created Records"
                value={this.state.createdRecords}
                onChangeText={createdRecords =>
                  this.setState({ createdRecords })
                }
              />
            </View>
          </View>

          {/* Company Name */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Company Name"
                placeholder="Company Name"
                value={this.state.companyName}
                onChangeText={companyName => this.setState({ companyName })}
              />
            </View>
          </View>

          {/* Plan Name */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Plan Name"
                placeholder="Plan Name"
                value={this.state.planName}
                onChangeText={planName => this.setState({ planName })}
              />
            </View>
          </View>

          {/* Expiry Date */}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Expiry Date"
                placeholder="Expiry Date"
                value={this.state.expiryDate}
                onChangeText={expiryDate => this.setState({ expiryDate })}
              />
            </View>
          </View>

          {/*Remaining Transaction*/}
          <View style={styles.container}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={userImg} />
            </View>
            <View style={styles.inputViewStyle}>
              <TextInput
                label="Remaining Transaction"
                placeholder="Remaining Transaction"
                value={this.state.remainingTransaction}
                onChangeText={remainingTransaction =>
                  this.setState({ remainingTransaction })
                }
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={this.onButtonPress.bind(this)}
            style={styles.button}
            activeOpacity={1}
          >
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 45;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
    marginBottom: 10
  },
  container: {
    marginTop: 8,
    flexDirection: "row"
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
    paddingBottom: 0,
    fontWeight: "bold"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  LabelStyle: {
    fontWeight: "bold",
    fontSize: 25,
    color: APP_COLOR
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
    width: 30,
    height: 30
  }
});

const mapsStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapsStateToProps,
  { fetchProfile }
)(MyProfile);
