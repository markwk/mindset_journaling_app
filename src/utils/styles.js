import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";

export const toolbarStyles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: "#FFFFFFFF"
  },
  addImage: {
    padding: 10,
    resizeMode: "contain"
  },
  addImageView: {
    flex: 0.33,
    resizeMode: "contain"
  },
  toolbarImage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold"
  }
});
