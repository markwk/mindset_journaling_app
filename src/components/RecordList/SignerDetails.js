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
//import TextInput from "react-native-material-textinput";

import TextInput from "../common/TextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import addImg from "../.././images/drawer_bg.png";
import userImg from "../../images/user.png";
import locationImg from "../../images/location.png";
import emaildImg from "../../images/emaild.png";
import phoneImg from "../../images/phone_green.png";

import { BASE_URL } from "../../utils/constants";

class SignerDetails extends Component {
  constructor(props) {
    super(props);

    var signer = this.props.signer;

    this.state = {
      firstname: signer.firstName,
      middlename: signer.middleName,
      lastname: signer.lastName,
      mobile: signer.phone,
      office: "",
      home: "",
      email: signer.email,
      address1: signer.address_1,
      address2: signer.address_2,
      city: signer.city,
      state: signer.state,
      zipcode: signer.zip,
      idType: signer.idType,
      idNumber: signer.idNo,
      createdRecords: "",
      companyName: "",
      planName: "",
      expiryDate: "",
      remainingTransaction: ""
    };
  }

  onFirstnameChange(firstname) {
    this.setState({ firstname });
  }

  onMiddlenameChange(middlename) {
    this.setState({ middlename });
  }

  onLastnameChange(lastname) {
    this.setState({ lastname });
  }

  onEmailIdChange(email) {
    this.setState({ email });
  }

  onPhoneChange(mobile) {
    this.setState({ mobile });
  }

  onAddress1Change(address1) {
    this.setState({ address1 });
  }

  onAddress2Change(address2) {
    this.setState({ address2 });
  }

  onCityChange(city) {
    this.setState({ city });
  }

  onStateChange(state) {
    console.log("state", state);
    this.setState({ state: state.toUpperCase() });
  }

  onZipCodeChange(zipcode) {
    this.setState({ zipcode });
  }

  onIDTypeValueChange(idType) {
    console.log("idType", idType);
    //if (idType != "default")
    this.setState({ idType });
  }

  onIDNumberChange(idNumber) {
    this.setState({ idNumber });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5 }}
        >
          <Text
            style={[
              styles.headerTxtStyle,
              {
                paddingTop: 0,
                paddingBottom: 0
              }
            ]}
          >
            Record No: {this.props.serialNo}
          </Text>
          <Text style={styles.txtStyle}>
            Created Date: {this.props.serialNo}
          </Text>
          <Text style={styles.txtStyle}>
            Modified Date: {this.props.modifiedDate}
          </Text>
          <View>
            {console.log("URL", BASE_URL + this.props.createdDate)}
            <Text style={styles.headerTxtStyle}>Uploaded Images</Text>
            <Image
              source={{ uri: BASE_URL + this.props.signer.docPath }}
              style={styles.signerImageStyle}
            />
          </View>
          <Text style={styles.headerTxtStyle}>Signer Details </Text>

          <TextInput
            inLineImg={userImg}
            placeholder="Firstname"
            label="Firstname"
            returnKeyType={"next"}
            autoCorrect={false}
            value={this.state.firstname}
            blurOnSubmit={false}
            onChangeText={this.onFirstnameChange.bind(this)}
          />
          <TextInput
            inLineImg={userImg}
            placeholder="Middlename"
            label="Middlename"
            returnKeyType={"next"}
            autoCorrect={false}
            value={this.state.middlename}
            blurOnSubmit={false}
            onChangeText={this.onMiddlenameChange.bind(this)}
          />

          <TextInput
            inLineImg={userImg}
            placeholder="Lastname"
            label="Lastname"
            returnKeyType={"next"}
            autoCorrect={false}
            value={this.state.lastname}
            blurOnSubmit={false}
            onChangeText={this.onLastnameChange.bind(this)}
          />

          <TextInput
            inLineImg={phoneImg}
            placeholder="Phone"
            label="Phone"
            returnKeyType={"next"}
            keyboardType={"number-pad"}
            autoCorrect={false}
            maxLength={10}
            value={this.state.mobile}
            blurOnSubmit={false}
            onChangeText={this.onPhoneChange.bind(this)}
          />

          <TextInput
            inLineImg={emaildImg}
            placeholder="Email"
            label="Email"
            returnKeyType={"next"}
            keyboardType={"email-address"}
            autoCorrect={false}
            value={this.state.email}
            blurOnSubmit={false}
            onChangeText={this.onEmailIdChange.bind(this)}
          />

          <TextInput
            inLineImg={locationImg}
            placeholder="Address 1"
            label="Address 1"
            returnKeyType={"next"}
            autoCorrect={false}
            value={this.state.address1}
            blurOnSubmit={false}
            onChangeText={this.onAddress1Change.bind(this)}
          />

          <TextInput
            inLineImg={locationImg}
            placeholder="Address 2"
            label="Address 2"
            returnKeyType={"next"}
            autoCorrect={false}
            value={this.state.address2}
            blurOnSubmit={false}
            onChangeText={this.onAddress2Change.bind(this)}
          />

          <TextInput
            inLineImg={locationImg}
            placeholder="City"
            label="City"
            returnKeyType={"next"}
            autoCorrect={false}
            value={this.state.city}
            blurOnSubmit={false}
            onChangeText={this.onCityChange.bind(this)}
          />

          <TextInput
            inLineImg={locationImg}
            placeholder="State"
            label="State"
            returnKeyType={"next"}
            autoCorrect={false}
            maxLength={2}
            value={this.state.state}
            blurOnSubmit={false}
            onChangeText={this.onStateChange.bind(this)}
          />

          <TextInput
            inLineImg={locationImg}
            placeholder="ZipCode"
            label="ZipCode"
            returnKeyType={"next"}
            autoCorrect={false}
            keyboardType={"number-pad"}
            value={this.state.zipcode}
            blurOnSubmit={false}
            onChangeText={this.onZipCodeChange.bind(this)}
          />
          <Text style={styles.headerTxtStyle}>ID Details </Text>

          <View style={styles.pickerContainer}>
            <View style={styles.imgViewStyle}>
              <Image style={styles.inlineImg} source={locationImg} />
            </View>
            <View style={styles.pickerViewStyle}>
              <Picker
                prompt="Options"
                selectedValue={this.state.idType}
                onValueChange={itemValue => {
                  if (itemValue != "default") {
                    this.setState({ itemValue });
                    this.onIDTypeValueChange(itemValue);
                  }
                }}
                mode="dialog"
                textStyle={styles.pickerText}
              >
                <Picker.Item label="Please select ID Type" value="default" />
                <Picker.Item label="Driving License" value="Driving License" />
                <Picker.Item label="Passport" value="Passport" />
                <Picker.Item label="State ID" value="State ID" />
                <Picker.Item label="Military ID" value="Military ID" />
              </Picker>
            </View>
          </View>
          <TextInput
            inLineImg={locationImg}
            placeholder="ID Number"
            label="ID Number"
            returnKeyType={"next"}
            autoCorrect={false}
            value={this.state.idNumber}
            blurOnSubmit={false}
            onChangeText={this.onIDNumberChange.bind(this)}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "white"
  },
  signerImageStyle: {
    backgroundColor: "black",
    padding: 10,
    resizeMode: "cover",
    width: DEVICE_WIDTH - 15,
    height: DEVICE_WIDTH / 2
  },
  headerTxtStyle: {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "transparent",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  imgViewStyle: {
    flex: 0.1,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },
  inlineImg: {
    resizeMode: "contain",
    width: 30,
    height: 30
  },
  pickerContainer: {
    marginTop: 8,
    flexDirection: "row"
  },
  pickerViewStyle: {
    flex: 0.9,
    marginLeft: 5,
    marginRight: 5
  },
  txtStyle: {
    color: "black",
    backgroundColor: "transparent",
    fontSize: 20
  }
});

export default SignerDetails;
