import { StyleSheet, View } from "react-native";
import IntroScreens from "./src/screens/IntroScreens";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
export default function App() {
  return (
    <View>
      {/* <IntroScreens />
      <ContactUsScreen /> */}
      {/* <HomeScreen /> */}
      <PaymentScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
