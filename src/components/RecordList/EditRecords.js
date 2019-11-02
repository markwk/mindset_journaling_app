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
  ImageBackground,
  FlatList
} from "react-native";
import Dimensions from "Dimensions";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
  ViewPager
} from "rn-viewpager";

import SignerDetails from "./SignerDetails";

import addImg from "../.././images/add_white.png";
import toolbarBgImg from "../.././images/header.png";
import backImg from "../.././images/back.png";
import { toolbarStyles } from "../../utils/styles";
import { Actions } from "react-native-router-flux";

const windowWidth = Dimensions.get("window").width;
class EditRecords extends Component {
  constructor(props) {
    super(props);
  }

  toolBar() {
    return (
      <View>
        <View style={toolbarStyles.toolbar}>
          <ImageBackground
            style={toolbarStyles.toolbarImage}
            source={toolbarBgImg}
          >
            <TouchableOpacity
              onPress={() => {
                Actions.pop();
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
              <Image
                source={backImg}
                style={[
                  toolbarStyles.addImage,
                  (height = "60%"),
                  (width = "60%")
                ]}
              />
            </TouchableOpacity>
            <View
              style={[
                toolbarStyles.addImage,
                { alignself: "center", justifyContent: "center" }
              ]}
            >
              <Text source={addImg} style={toolbarStyles.headerText}>
                Edit Record
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                ToastAndroid.show("add", ToastAndroid.LONG);
              }}
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
  }

  _renderTitleIndicator() {
    return (
      <PagerTitleIndicator
        style={styles.indicatorContainer}
        trackScroll={false}
        itemTextStyle={styles.indicatorText}
        itemStyle={styles.indicatorStyle}
        selectedItemStyle={styles.selectedIndicatorStyle}
        selectedItemTextStyle={styles.indicatorSelectedText}
        selectedBorderStyle={styles.selectedBorderStyle}
        titles={["Signer Details", "Jurats Details"]}
      />
    );
  }

  showRecordDetails() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={{ flex: 1, backgroundColor: this._bgColor }}>
          <IndicatorViewPager
            style={{
              flex: 1,
              marginLeft: 5,
              marginRight: 5,
              flexDirection: "column-reverse"
            }}
            horizontalScroll={false}
            indicator={this._renderTitleIndicator()}
          >
            <View style={{ backgroundColor: "white" }}>
              {/* {console.log(
                "this.props.item.signer",
                JSON.stringify(this.props.item)
              )} */}
              {ToastAndroid.show(
                this.props.item.signer[0].city,
                ToastAndroid.LONG
              )}
              <SignerDetails signer={this.props.item.signer[0]} />
            </View>
            <View style={{ backgroundColor: "white" }}>
              <Text>page two</Text>
            </View>
          </IndicatorViewPager>
        </Animated.View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.toolBar()}
        {this.showRecordDetails()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: 56
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  },
  indicatorContainer: {
    height: 60
  },
  indicatorText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: "black"
  },
  indicatorSelectedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 5
  },
  selectedBorderStyle: {
    height: 3,
    backgroundColor: "#4682b4"
  },
  statusBar: {
    height: 24,
    backgroundColor: "#00FFFFFF"
  },
  toolbarContainer: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  backImg: {
    width: 16,
    height: 17
  },
  titleTxt: {
    marginLeft: 36,
    color: "white",
    fontSize: 20
  },
  indicatorStyle: {
    padding: 10,
    width: windowWidth / 2,
    backgroundColor: "white"
  },
  selectedIndicatorStyle: {
    padding: 10,
    backgroundColor: "#4682b4",
    width: windowWidth / 2
  }
});

export default EditRecords;
