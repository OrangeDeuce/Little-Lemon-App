import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("123@test.com");
  const [password, setPassword] = React.useState("123");
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <ScrollView style={styles.container} keyboardDismissMode="on-drag">
      <Text style={styles.headerText}>
        Welcome to LITTLE LEMON Mediterranean Bistro!
      </Text>
      {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}

      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="email"
            onChangeText={setEmail}
            keyboardType={"email-address"}
            onFocus={() => {
              Alert.alert("The email box is focused on!");
            }}
            onBlur={() => {
              Alert.alert(
                "Now email box is blurred! (We tapped away from it!)"
              );
            }}
            clearButtonMode={"always"}
          />
          <TextInput
            value={password}
            placeholder="password"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
            keyboardType={"default"}
            onFocus={() => {
              Alert.alert(
                "Password should be only 1 character in length with the value: 'b'!"
              );
            }}
            clearButtonMode={"always"}
          />
          <Pressable
            style={styles.loginButton}
            // onPress={() => {
            //   setLoggedIn(!loggedIn);
            //   console.log(loggedIn);
            //   () => navigation.navigate("Welcome");
            // }}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "white",
  },

  headerText: {
    padding: 30,
    paddingHorizontal: 50,
    fontSize: 35,
    color: "#EDEFEE",
    textAlign: "center",
    fontFamily: "NotoSerifOriya",
  },

  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    fontFamily: "NotoSerifOriya",
  },

  loginButton: {
    backgroundColor: "#F4CE14",
    width: 200,
    alignSelf: "center",
    padding: 12,
    borderRadius: 40,
    margin: 10,
  },

  loginButtonText: {
    paddingTop: 5,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "NotoSerifOriya",
  },
});
