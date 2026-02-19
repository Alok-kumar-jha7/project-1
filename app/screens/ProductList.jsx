import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Error } from "../../components/Error";
import axios from "axios";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "@/components/Button";
import {Ionicons} from "@expo/vector-icons"

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products",
      );
      setProducts(response.data);
    } catch (err) {
      ToastAndroid.showWithGravity(
        "Failed to load products",
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  if (error) {
    return <Error onRetry={fetchProducts} />;
  }

  return (
    <SafeAreaView style={styles.container}>
  <View style={{flexDirection:"row" }}>
      <TouchableOpacity
  onPress={() => router.back()}
  style={styles.goBack}
>
  <Ionicons name="arrow-back" size={16} color="black" />
  
</TouchableOpacity>
<Text style={{marginLeft:6,fontSize:16, fontWeight: "bold"}}>
  Go back
</Text>
</View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.cardcontainer}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <View style={styles.about}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
              <AppButton
                title="View Details"
                variant="primary"
                style={styles.detailBtn}
                onPress={() =>
                  router.push({
                    pathname: "/screens/ProductDetail",
                    params: { product: JSON.stringify(item) },
                  })
                }
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  cardcontainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { height: 4, width: 5 },
    padding: 12,
  },
  image: {
    height: 165,
    borderRadius: 15,
    backgroundColor: "#F9FAFB",
    resizeMode: "contain",
  },
  about: {
   marginTop:10
  },
  title: {
    color: "orange",
    marginLeft: 8,
    fontWeight: "800",
    fontSize: 20,
  },
  price: {
    marginTop: 4,
    color: "green",
    padding: 10,
    fontWeight: "600",
  },
  detailBtn: {
    alignSelf: "flex-end",
  },

  goBack:{
     backgroundColor: "silver",
    width: 20,
    height: 23,
    borderRadius: 25,
    marginLeft:12,
    marginBottom:15,
    alignItems: "center",
    justifyContent: "center",
  }
});
