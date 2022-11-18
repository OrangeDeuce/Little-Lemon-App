import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={welcomeStyles.container}>
      <ScrollView indicatorStyle={"white"} style={welcomeStyles.scrollArea}>
        <View style={welcomeStyles.headerWrapper}>
          <Image
            style={welcomeStyles.image}
            source={require("../img/LittleLemonBackground.png")}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={"Logo image"}
          />
          <Text style={welcomeStyles.headerText}>Little Lemon</Text>
        </View>
        <Text style={welcomeStyles.description}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <Pressable onPress={() => navigation.navigate("Menu")}>
          <Text style={welcomeStyles.buttonText}>View Menu</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollArea: {
    flex: 1,
  },

  headerText: {
    fontSize: 30,
    color: "black",
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    textAlign: "center",
    paddingLeft: 15,
    // borderColor: "red",
    // borderWidth: 2,
  },

  description: {
    fontSize: 25,
    padding: 20,
    textAlign: "center",
    marginVertical: 8,
    color: "black",
    // borderColor: "red",
    // borderWidth: 2,
  },

  image: {
    height: 100,
    width: 100,
  },

  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },

  buttonText: {
    fontSize: 30,
    color: "black",
    padding: 30,
    textAlign: "center",
  },
});
