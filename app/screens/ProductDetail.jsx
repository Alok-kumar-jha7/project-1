import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import ErrorScreen from "@/components/Error";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetail() {
  const { product } = useLocalSearchParams();
  if (!product) return <ErrorScreen />;
  const ProductData = JSON.parse(product);
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => router.back()} style={styles.goBack}>
          <Ionicons name="arrow-back" size={16} color="black" fontWeight="bold" />
        </TouchableOpacity>
        <Text style={{ marginLeft: 6,fontSize:16, fontWeight: "bold" }}>Go back</Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Image source={{ uri: ProductData.images[0] }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{ProductData.title}</Text>
            <Text style={styles.price}>₹ {ProductData.price}</Text>
            <Text style={styles.desc}>{ProductData.description}</Text>
            <Text style={styles.category}>
              Category: {ProductData.category.name}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  card: {
    margin: 15,
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    elevation: 4,
  },

  image: {
    height: 260,
    borderRadius: 12,
    resizeMode: "contain",
    backgroundColor: "#F0F2F5",
  },
  details: {
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2d78e0",
  },

  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#16A34A",
    marginVertical: 6,
  },

  desc: {
    fontSize: 15,
    color: "gray",
    marginTop: 10,
    lineHeight: 22,
  },

  category: {
    marginTop: 12,
    fontWeight: "600",
    color: "#8321c4",
  },
  goBack: {
    backgroundColor: "silver",
    width: 20,
    height: 23,
    borderRadius: 25,
    marginLeft: 12,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
