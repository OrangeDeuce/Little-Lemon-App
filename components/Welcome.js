import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={require("../img/littleLemonLogo.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
        resizeMode="contain"
      /> */}
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../img/LittleLemonBackground.png")}
        resizeMode="contain"
      >
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </ImageBackground>
      {/* <Image
        style={styles.image}
        source={require("../img/Picture4.png")}
        accessible={true}
        accessibilityLabel="Some oyster looking stuff"
        resizeMode="cover"
      />
      <Image
        style={styles.image}
        source={require("../img/Picture2.png")}
        accessible={true}
        accessibilityLabel="The fish"
        resizeMode="repeat"
      />
      <Image
        style={styles.image}
        source={require("../img/Picture1.png")}
        accessible={true}
        accessibilityLabel="One of our tables"
        resizeMode="cover"
      />
      <Image
        style={styles.image}
        source={require("../img/Picture3.png")}
        accessible={true}
        accessibilityLabel="Mutilation of an innocent lemon"
        resizeMode="cover"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "white",
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },

  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    border: 10,
    borderColor: "white",
    borderWidth: 2,
    alignSelf: "center",
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Welcome;
