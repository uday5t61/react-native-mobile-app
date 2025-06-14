import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="send" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1077AF",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    alignItems: "center",
    justifyContent: "center",
  },
});
