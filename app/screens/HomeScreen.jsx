import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}
      resizeMethod="contain"
      style={styles.container}
    >
      <Text style={styles.title}>Welcome 👋</Text>

      <Text style={styles.subtitle}>Click below to view products</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/ProductList")}
      >
        <Text style={styles.buttonText}>View Products</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#000",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
