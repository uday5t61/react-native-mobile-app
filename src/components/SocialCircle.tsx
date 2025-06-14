import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const SocialCircle = () => {
  return (
    <View style={styles.container}>
      {/* <FontAwesome5 name="whatsapp" size={24} color="#1077AF" /> */}
    </View>
  );
};

export default SocialCircle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: s(46),
    width: s(46),
    borderRadius: s(24),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: s(1),
    borderColor: "#1077AF",
  },
});
