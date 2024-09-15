import React from "react";
import { View } from "react-native";
import CustomButton from "./CustomButton";

//TO DO: add logic for stripe payments
const openPaymentSheet = () => {};

export default function Payment() {
  return (
    <View>
      <CustomButton
        title="Confirm Ride"
        className="mt-10"
        onPress={openPaymentSheet}
      />
    </View>
  );
}
