import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import SendButton from "./SendButton";
import { s, vs } from "react-native-size-matters";

interface SocialSectionProps {
  title: string;
  icon: React.ReactNode;
}

const SocialSection: FC<SocialSectionProps> = ({ title, icon }) => (
  <View style={styles.container}>
    <View style={styles.circle}>{icon}</View>
    <Text style={styles.text}>{title}</Text>
    <SendButton />
  </View>
);

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#E4E6E8",
    borderBottomWidth: s(1),
    paddingVertical: vs(15),
  },
  text: {
    fontSize: s(12),
    marginStart: s(14),
    color: "#8083A3",
    flex: 1,
  },
  circle: {
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
