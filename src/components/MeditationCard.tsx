import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const phoneWidth = Dimensions.get("window").width;
const cardWidth = (phoneWidth - s(16) * 3) / 2;
interface MeditationCardProps {
  imageURL: string;
  title: string;
  date: string;
}
const MeditationCard: FC<MeditationCardProps> = ({ imageURL, title, date }) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.imageContainer}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay}></View>
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.carContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="video-camera" size={24} color="#4A8CFF" />
          <Text
            style={{
              color: "#fff",
              fontSize: s(12),
              marginStart: s(7),
              fontWeight: "400",
            }}
          >
            {date}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(161),
    width: cardWidth,
    borderRadius: s(12),
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    resizeMode: "cover",
  },
  carContent: {
    position: "absolute",
    left: s(10),
    bottom: s(10),
  },
  title: {
    color: "#fff",
    fontSize: s(12),
    fontWeight: "semibold",
    fontFamily: "Montserrat",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  liveBadge: {
    height: vs(22),
    width: s(39),
    backgroundColor: "#E41111",
    position: "absolute",
    top: vs(6),
    right: s(5.5),
    borderRadius: s(90),
    alignItems: "center",
    justifyContent: "center",
  },
  liveText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: s(11),
  },
});
