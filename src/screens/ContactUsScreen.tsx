import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.socialHeader}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection
          title={"WhatsApp"}
          icon={<FontAwesome6 name="whatsapp" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="X"
          icon={<FontAwesome6 name="x-twitter" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="Instagram "
          icon={<FontAwesome6 name="instagram" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="Snap Chat"
          icon={<FontAwesome6 name="snapchat" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="Tik Tok"
          icon={<FontAwesome6 name="tiktok" size={24} color="#178AD9" />}
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingVertical: vs(15),
    paddingHorizontal: s(18),
    marginTop: vs(20),
  },
  socialTitle: {
    fontFamily: "IBM Plex Sans Arabic",
    fontSize: s(16),
    fontWeight: "600",
    color: "#000000",
  },
  socialHeader: {
    fontFamily: "IBM Plex Sans Arabic",
    fontSize: s(30),
    fontWeight: "600",
    color: "#000000",
    marginTop: vs(20),
    marginStart: s(19),
  },
});
