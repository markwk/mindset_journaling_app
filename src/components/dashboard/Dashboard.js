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
import DrawerLayout from "./DrawerLayout";
import Drawer from "react-native-drawer";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Dimensions from "Dimensions";
import { fetchRecords } from "../../actions";

import addImg from "../.././images/add_white.png";
import toolbarBgImg from "../.././images/header.png";
import drawerMenuImg from "../.././images/drawer_menu.png";
import { toolbarStyles } from "../../utils/styles";
import MyProfile from "../Profile/MyProfile";
import RecodList from "../RecordList/RecodList";

import {
  MAIN,
  RECORDS,
  PROFILE,
  EDIT_RECORDS,
  COMPANY
} from "../../utils/constants";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: RECORDS
    };
    // Bind the this context to the handler function
    this.drawerClickHandler = this.drawerClickHandler.bind(this);
  }

  // This method will be sent to the child component
  drawerClickHandler(selectedScreen) {
    // ToastAndroid.show(selectedScreen, ToastAndroid.SHORT);
    //console.log("selectedScreen", selectedScreen);
    this.setState({
      selectedItem: selectedScreen
    });
  }

  toggleDrawer() {
    if (this._drawer.open()) {
      console.log("onPress Drawer Close");
      closeControlPanel();
    } else {
      console.log("onPress Drawer Open");
      this.openControlPanel();
    }
  }

 

  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };

  toolBar() {
    return (
      <View style={styles.container}>
        <View style={toolbarStyles.toolbar}>
          <ImageBackground
            style={toolbarStyles.toolbarImage}
            source={toolbarBgImg}
          >
            <TouchableOpacity
              onPress={() => {
                if (this._drawer.open()) {
                  this._drawer.close();
                } else {
                  this._drawer.open();
                }
              }}
              style={[
                toolbarStyles.addImage,
                {
                  alignself: "left",
                  marginLeft: 10,
                  justifyContent: "flex-start"
                }
              ]}
            >
              <Image source={drawerMenuImg} style={toolbarStyles.addImage} />
            </TouchableOpacity>
            <View
              style={[
                toolbarStyles.addImage,
                { alignself: "center", justifyContent: "center" }
              ]}
            >
              <Text source={addImg} style={toolbarStyles.headerText}>
                {this.state.selectedItem}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                toolbarStyles.addImage,
                {
                  alignself: "right",
                  marginRight: 10,
                  justifyContent: "flex-end"
                }
              ]}
            >
              <Image source={addImg} style={toolbarStyles.addImage} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
    container;
  }

  dyanamicScreens() {
    if (this.state.selectedItem == RECORDS) return <RecodList />;
    else if (this.state.selectedItem == PROFILE) return <MyProfile />;
    else if (this.state.selectedItem == COMPANY)
      return (
        <View>
          <Text>Tesnlksl</Text>
        </View>
      );
  }

  render() {
    return (
      <Drawer
        ref={ref => (this._drawer = ref)}
        openDrawerOffset={0.2}
        tapToClose={true}
        height={65}
        content={
          <DrawerLayout
            drawerAction={this.drawerClickHandler}
            refer={this._drawer}
          />
        }
      >
        {this.toolBar()}

        {this.dyanamicScreens()}
      </Drawer>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const MARGIN = 45;

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default DashBoard;
