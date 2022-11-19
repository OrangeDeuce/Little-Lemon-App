import * as React from "react";
import {
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [message, onChangeMessage] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          We strive for open communication and are ready to hear your comments
          and suggestions at how we can continue to deliver quality service and
          food at Little Lemon. We would love to hear about your experience with
          us!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          keyboardType="default"
          onChangeText={onChangeFirstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          keyboardType="default"
          onChangeText={onChangeLastName}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={onChangePhoneNumber}
        />

        <TextInput
          style={styles.commentInput}
          placeholder="Comment here"
          value={message}
          keyboardType="default"
          onChangeText={onChangeMessage}
          multiline={true}
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },

  input: {
    height: 40,
    width: 350,
    alignSelf: "center",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "white",
  },

  messageInput: {},

  infoSection: {
    paddingTop: 10,
    paddingHorizontal: 40,
    paddingBottom: 30,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },

  headingSection: {
    color: "white",
    fontSize: 30,
    padding: 30,
    paddingBottom: 10,
    textAlign: "center",
  },

  commentInput: {
    height: 100,
    margin: 12,
    width: 350,
    alignSelf: "center",
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "white",
  },
});

export default FeedbackForm;
