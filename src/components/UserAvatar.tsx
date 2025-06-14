import { StyleSheet, Image } from "react-native";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <Image
      source={{
        uri: "https://www.livemint.com/lm-img/img/2024/04/24/1600x900/PTI04-01-2024-000194B-0_1713933652502_1713933713810.jpg",
      }}
      style={styles.avatar}
    />
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    height: s(32),
    width: s(32),
    borderRadius: s(16), // Making it circular
  },
});
