import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState("");

  const validEmail = validateEmail(email);
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder={"Type your email"}
        keyboardType="email-address"
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <Button
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!validEmail}
      >
        Subscribe
      </Button>
    </ScrollView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    height: 100,
    width: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 18,
  },

  text: {
    fontSize: 21,
    padding: 20,
    textAlign: "center",
    marginHorizontal: 30,
  },

  // button: {
  //   backgroundColor: "#495E57",
  //   height: 35,
  //   width: 360,
  //   alignSelf: "center",
  //   justifyContent: "center",
  //   borderRadius: 7,
  //   marginTop: 20,
  // },

  // buttonText: {
  //   color: "white",
  //   textAlign: "center",
  //   fontSize: 18,
  // },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "black",
    // backgroundColor: "#F4CE14",
    width: 360,
    alignSelf: "center",
    borderRadius: 8,
  },
});
