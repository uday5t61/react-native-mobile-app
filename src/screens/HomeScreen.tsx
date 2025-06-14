import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../assets/data/data";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.meditationText}>Meditations</Text>
      <Text
        style={{
          fontSize: s(14),
          color: "#2C2016",
          marginTop: vs(5),
          fontWeight: "400",
          marginBottom: vs(16),
        }}
      >
        Lorem Ipsum is simply dummy text
      </Text>
      <TopTabs />
      {/* <MeditationCard /> */}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MeditationCard
            title={item.title}
            imageURL={item.image}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(10),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(150),
          paddingTop: vs(15),
        }}
      ></FlatList>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(50),
    paddingHorizontal: s(16),
  },
  meditationText: {
    fontSize: s(20),
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#1D150F",
  },
});
