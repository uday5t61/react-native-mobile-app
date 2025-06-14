import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const tabArr = ["Live", "Recorded"];
const ACTIVE_BG = "#75563B";
const ACTIVE_TEXT = "#FFFFFF";
const INACTIVE_TEXT = "#2C2016";

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {tabArr.map((tabName) => {
        const isActive = activeTab === tabName;
        return (
          <TouchableOpacity
            key={tabName}
            style={[
              styles.tabButton,
              isActive && { backgroundColor: ACTIVE_BG },
            ]}
            onPress={() => setActiveTab(tabName)}
          >
            <Text
              style={[
                styles.buttonText,
                isActive ? { color: ACTIVE_TEXT } : { color: INACTIVE_TEXT },
              ]}
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    height: vs(48),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },
  tabButton: {
    height: vs(32),
    borderRadius: s(8),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: s(14),
    fontWeight: "semibold",
  },
});
