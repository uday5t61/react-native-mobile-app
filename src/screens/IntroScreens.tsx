import { StyleSheet, View } from "react-native";
// import React from "react";
import FoodLogo from "../assets/FoodLogo";
import SunImage from "../assets/SunImage";

const IntroScreens = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunImage style={styles.SunImage} />
    </View>
  );
};

export default IntroScreens;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  SunImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
