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
import RecordListItem from "./RecordListItem";
import DrawerLayout from "../dashboard/DrawerLayout";
import Drawer from "react-native-drawer";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Dimensions from "Dimensions";
import { fetchRecords } from "../../actions";

import MyProfile from "../Profile/MyProfile";

import { MAIN, RECORDS, PROFILE, EDIT_RECORDS } from "../../utils/constants";

class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      recordList: []
    };

    this.recordListItemClickHandler = this.recordListItemClickHandler.bind(
      this
    );
  }

  recordListItemClickHandler(item,createdDate, modifiedDate, serialNo ) {
    Actions.editRecords({ item, createdDate, modifiedDate, serialNo });
    //ToastAndroid.show("recordListItemClickHandler", ToastAndroid.SHORT);
    //ToastAndroid.show(item.serialNo, ToastAndroid.SHORT);
  }

  componentWillMount() {
    console.log("componentWillMount");
    AsyncStorage.getItem("Token")
      .then(value => {
        if (value) {
          console.log("value", value);
          this.setState({ token: value });
          this.makeRecordFetchRequest();
        }
      })
      .done();
  }

  componentWillReceiveProps(nextProps) {
    ///console.log("Data flatlist", JSON.stringify(nextProps.records));
    console.log("Data flatlist s", JSON.stringify(nextProps.records.records.s));

    if (nextProps.records != "" && nextProps.records != undefined) {
      console.log(
        "Data flatlist sssssss",
        JSON.stringify(nextProps.records.records.s)
      );

      if (JSON.stringify(nextProps.records.records.s)) {
        // console.log(
        //   "Data flatlist",
        //   JSON.stringify(nextProps.records.records.d)
        // );

        this.setState({
          recordList: nextProps.records.records.d
        });
      }
    }
  }
  makeRecordFetchRequest = () => {
    console.log("Record", this.state.token);
    this.props.fetchRecords(this.state.token);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.recordList.length > 0 ? (
          <FlatList
            data={this.state.recordList}
            renderItem={({ item }) => (
              <RecordListItem
                item={item}
                onPressItem={this.recordListItemClickHandler}
                serialNo={"Serial No: " + item.serialNo}
                signerName={"Signer Name: " + item.signer[0].firstName}
                createdDate={"Created Date: " + item.createdAt}
                modifiedDate={"Modified Date: " + item.updatedAt}
              />
            )}
            keyExtractor={item => item.serialNo + ""}
          />
        ) : (
          <Text>No Records to show</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

const mapsStateToProps = state => {
  console.log(JSON.stringify(state.records));
  return {
    records: state.records
  };
};

export default connect(
  mapsStateToProps,
  { fetchRecords }
)(RecordList);
