import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={welcomeStyles.container}>
      <ScrollView indicatorStyle={"white"} style={welcomeStyles.scrollArea}>
        {/* <View style={welcomeStyles.headerWrapper}>
          <Image
            style={welcomeStyles.image}
            source={require("../img/LittleLemonBackground.png")}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={"Logo image"}
          />
          <Text style={welcomeStyles.headerText}>Little Lemon</Text>
        </View> */}
        <Image
          style={welcomeStyles.logoBanner}
          source={require("../img/littleLemonLogo.png")}
          resizeMode="contain"
        />
        <ImageBackground
          style={welcomeStyles.background}
          source={require("../img/diningPhotoBW.jpg")}
          resizeMode="cover"
        >
          <Text style={welcomeStyles.description}>
            Little Lemon is a charming neighborhood Mediterranean bistro that
            serves simple food and classic cocktails in a lively but casual
            environment. Welcome to the Little Lemon!
          </Text>
          <Pressable
            style={welcomeStyles.viewMenuButton}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={welcomeStyles.buttonText}>View Menu</Text>
          </Pressable>
        </ImageBackground>
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
    paddingVertical: 20,
  },

  logoBanner: {
    width: 325,
    height: 150,
    alignSelf: "center",
  },

  description: {
    fontSize: 25,
    padding: 20,
    paddingHorizontal: 60,
    textAlign: "center",
    marginVertical: 8,
    color: "white",
    // borderColor: "red",
    // borderWidth: 2,
    fontStyle: "italic",
  },

  background: {
    flex: 1,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 25,
    paddingTop: 5,
    color: "black",
    // padding: 30,
    textAlign: "center",
    fontFamily: "NotoSerifOriya",
  },

  viewMenuButton: {
    backgroundColor: "#F4CE14",
    borderWidth: 1,
    borderColor: "#F4CE14",
    borderRadius: 40,
    width: 200,
    height: 70,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 38,
  },
});
