import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function Footer() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

export default Footer;

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    // marginBottom: 10,
  },

  text: {
    paddingVertical: 10,

    color: "black",
    fontSize: 12,
    textAlign: "center",
  },
});
