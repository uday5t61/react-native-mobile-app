import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { CardIcon } from "../assets/Icons";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  return (
    <View style={styles.bankCard}>
      {/* <CardIcon /> */}
      <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: s(150),
          height: vs(150),
          //backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/animations/BankCardAnimation.json")}
      />
      <Text style={styles.noCardText}>No master card added</Text>
      <Text style={styles.addCardSuggestionText}>
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  bankCard: {
    backgroundColor: "#F7F8F9",
    marginTop: vs(25),
    borderRadius: s(10),
    alignItems: "center",
    justifyContent: "center",
    paddingTop: vs(5),
    paddingBottom: vs(35),
    paddingHorizontal: s(30),
  },
  noCardText: {
    fontSize: s(16),
    fontWeight: "bold",
    fontFamily: "Sen",
    marginTop: vs(17),
    color: "#32343E",
  },
  addCardSuggestionText: {
    fontSize: s(15),
    textAlign: "center",
    marginTop: s(6),
    color: "#2D2D2D",
  },
});
