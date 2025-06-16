import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { s, vs } from "react-native-size-matters";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface PaymentCardProps {
  isSelected?: boolean;
  title: string;
  icon: ReactNode;
  onPress?: () => void;
}
const PayMethodCard: FC<PaymentCardProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
      {isSelected && (
        <View style={styles.circle}>
          <FontAwesome5 name="check" size={s(12)} color="#fff" />
        </View>
      )}
      <View
        style={[styles.paymentCard, isSelected && styles.selectedCardStyle]}
      >
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PayMethodCard;

const styles = StyleSheet.create({
  paymentCard: {
    height: vs(72),
    width: s(85),
    backgroundColor: "#F0F5FA",
    borderRadius: s(9.6),
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: vs(4),
    fontWeight: 400,
    fontFamily: "Sen",
    color: "#464E57",
    fontSize: s(14),
    textAlign: "center",
  },
  selectedCardStyle: {
    borderColor: "#FF7622",
    backgroundColor: "#fff",
    borderWidth: s(2),
  },
  circle: {
    backgroundColor: "#FF7622",
    height: vs(24),
    width: s(24),
    borderRadius: s(12),
    borderColor: "#fff",
    borderWidth: s(2),
    position: "absolute",
    zIndex: 1,
    top: s(-8),
    right: s(-8),
    alignItems: "center",
    justifyContent: "center",
  },
});
