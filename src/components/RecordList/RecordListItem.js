import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class RecordListItem extends Component {
  onItemPress() {
    this.props.onPressItem(
      this.props.item,
      this.props.createdDate,
      this.props.modifiedDate,
      this.props.serialNo
    );
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.onItemPress()}>
        <View style={styles.itemStyle}>
          <Text style={styles.boldtext}>{this.props.serialNo}</Text>
          <Text style={styles.boldtext}>{this.props.signerName}</Text>
          <Text style={styles.normalText}>{this.props.createdDate}</Text>
          <Text style={styles.normalText}>{this.props.modifiedDate}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  boldtext: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold"
  },
  normalText: {
    fontSize: 18
  },
  itemStyle: {
    padding: 10,
    backgroundColor: "#FFF",
    flex: 1,
    marginTop: 5
  }
});
