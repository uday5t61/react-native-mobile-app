import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PayMethodCard from "../components/PayMethodCard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MasterCardIcon, PaypalIcon, VisaIcon } from "../assets/Icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import BankCardBox from "../components/BankCardBox";
import AddNewBox from "../components/AddNewBox";

const paymentMethods = [
  {
    title: "Cash",
    icon: (
      <MaterialCommunityIcons name="cash-multiple" size={30} color="#FF7622" />
    ),
  },
  {
    title: "Visa",
    icon: <VisaIcon />,
  },
  {
    title: "Master",
    icon: <MasterCardIcon />,
  },
  {
    title: "Paypal",
    icon: <FontAwesome6 name="cc-paypal" size={30} color="#2790C3" />,
  },
];
const PaymentScreen = () => {
  const [selectedCard, setSelectedCard] = useState("");
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: s(16),
        }}
      >
        <BackButton />
        <Text style={{ marginStart: s(12), fontSize: s(17), color: "#181C2E" }}>
          Payments
        </Text>
      </View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <PayMethodCard
            title={item.title}
            icon={item.icon}
            onPress={() => setSelectedCard(item.title)}
            isSelected={selectedCard === item.title}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          paddingTop: vs(15),
          gap: s(16),
          paddingHorizontal: s(16),
        }}
      ></FlatList>

      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
      </View>
      <AddNewBox />
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
