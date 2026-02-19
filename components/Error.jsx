import { View, Text, StyleSheet, Image } from "react-native";
import AppButton from "./Button";

export default function ErrorScreen({ onRetry }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/error.png")}
        style={styles.gif}
      />
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.message}>
        Something went wrong while loading products.
      </Text>
      <AppButton
        title="Try Again"
        onPress={onRetry}
        variant="primary"
        style={{ marginTop: 25, width: 160 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  gif: {
    width: 500,
    height: 400,
    marginBottom:10
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  message: {
    marginTop: 8,
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  button: {
    marginTop: 25,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
