import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../type";

type Props = NativeStackScreenProps<RootStackParamlist, "WelcomeScreen">;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://sevenvillahotel.co.za/wp-content/uploads/2023/06/REUBENS-RESTAURANT-BAR-9-scaled-1200x675.jpg",
        }}
        style={styles.bg}
      >
        <View style={styles.overlay} />
        <View style={styles.center}>
          <Text style={styles.title}>Welcome to Chef Christoffel's Kitchen</Text>
          <Text style={styles.subtitle}>Your fine dining experience, right at your fingertips.</Text>
          <TouchableOpacity style={styles.cta} onPress={() => navigation.replace("HomeScreen")}>
            <Text style={styles.ctaText}>MENU</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f0b15" },
  bg: { flex: 1, justifyContent: "center" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(15,11,21,0.65)" },
  center: { alignItems: "center", paddingHorizontal: 24 },
  title: { color: "#e6e6fa", fontSize: 42, fontWeight: "800", textAlign: "center" },
  subtitle: { color: "#b8b8d8", fontSize: 16, marginTop: 6, marginBottom: 28, textAlign: "center" },
  cta: { backgroundColor: "#2ecc71", paddingVertical: 14, paddingHorizontal: 44, borderRadius: 28, elevation: 6 },
  ctaText: { color: "#0f0b15", fontWeight: "900", fontSize: 18 },
});