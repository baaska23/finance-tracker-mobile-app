import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AddTransactionButton() {
  const onPress = () => {
    console.log("Button pressed");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.plusIcon}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e05b5b", // Red background
    borderRadius: 50, // Makes the button circular
    width: 60, // Width of the button
    height: 60, // Height of the button
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
    shadowColor: "#000", // Add shadow for a floating effect
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Shadow for Android
  },
  plusIcon: {
    color: "white", // White "+" icon
    fontSize: 32, // Larger font size for the "+" symbol
    fontWeight: "bold",
  },
});
