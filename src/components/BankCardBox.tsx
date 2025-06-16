import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { CardIcon } from "../assets/Icons";

const PHONE_WIDTH = Dimensions.get("window").width;
const BANK_CARD_WIDTH = PHONE_WIDTH - s(24) * 2;
const BankCardBox = () => {
  return (
    <View style={styles.bankCard}>
      <CardIcon />
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
    paddingVertical: vs(35),
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
