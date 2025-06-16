import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PHONE_WIDTH = Dimensions.get("window").width;
const BOX_WIDTH = PHONE_WIDTH - s(24) * 2;
const AddNewBox = () => {
  return (
    <TouchableOpacity style={styles.boxStyle}>
      <FontAwesome6 name="plus" size={s(14)} color="#FF7622" />
      <Text
        style={{
          marginStart: s(10),
          color: "#FF7622",
          fontSize: s(14),
          fontWeight: "bold",
        }}
      >
        ADD NEW
      </Text>
    </TouchableOpacity>
  );
};

export default AddNewBox;

const styles = StyleSheet.create({
  boxStyle: {
    height: vs(62),
    width: BOX_WIDTH,
    marginHorizontal: s(24),
    backgroundColor: "#FFFFFF",
    borderRadius: s(10),
    borderWidth: s(2),
    borderColor: "#F0F5FA",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: vs(20),
  },
});
