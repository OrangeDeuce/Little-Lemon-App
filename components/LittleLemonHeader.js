import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText} numberOfLines={3}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.18,
    backgroundColor: "#F4CE14",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 1,
  },

  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "red",
    borderWidth: 1,
  },
});
