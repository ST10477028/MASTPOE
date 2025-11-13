// Code Atrributes:
// Author: w3schools
// Title: Typescript
// Date published: Copyright 1999-2025
// Link: https:/www.w3schools.com/typescript/
// Date accessed: 2025/11/10

import React, { useMemo, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { menuItem, Course, RootStackParamlist } from "../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamlist, "Filter">;

type ScreenProps = Props & { items?: menuItem[] };

// Updated color scheme - purple and green
const c = {
  bg: "#0f0b15",       // Dark purple
  card: "#1a1525",     // Medium dark purple
  text: "#e6e6fa",     // Light lavender
  meta: "#b8b8d8",     // Muted lavender
  accent: "#9b59b6",   // Purple accent
  input: "#2d2440",    // Dark purple input
  border: "#3e3254",   // Purple border
  green: "#2ecc71",    // Green accent
  greenDark: "#27ae60" // Dark green
};

export default function FilterScreen({ route, items }: ScreenProps) {
  const itemsList: menuItem[] = items ?? route.params?.items ?? [];
  const [selected, setSelected] = useState<Course>("STARTER");

  const filteredItems = useMemo(
    () => itemsList.filter((i) => i.category === selected),
    [itemsList, selected]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pickerWrap}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selected}
            onValueChange={(v) => setSelected(v as Course)}
            mode="dropdown"
            dropdownIconColor={c.accent}
            style={styles.picker}
            itemStyle={{ height: 44 }}
          >
            <Picker.Item label="STARTER" value="STARTER" color={c.text} />
            <Picker.Item label="MAIN" value="MAIN" color={c.text} />
            <Picker.Item label="DESSERT" value="DESSERT" color={c.text} />
          </Picker>
        </View>
      </View>

      <Text style={styles.heading}>
        {selected}s ({filteredItems.length})
      </Text>

      <FlatList
        data={filteredItems}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.title}>{item.itemName}</Text>
              <View style={styles.chips}>
                {item.ingredients.map((g, idx) => (
                  <View key={idx} style={styles.chip}>
                    <Text style={styles.chipText}>{g}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: c.bg, padding: 16 },
  pickerWrap: { marginBottom: 12 },
  pickerBox: {
    backgroundColor: c.input,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: c.border,
    overflow: "hidden",
    height: 50,
    justifyContent: "center",
  },
  picker: { color: c.text, height: 50, width: "100%" },
  heading: {
    color: c.text,
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 8,
  },
  card: {
    backgroundColor: c.card,
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 8,
    elevation: 3,
  },
  image: { width: "100%", height: 170 },
  body: { padding: 12 },
  title: { color: c.text, fontSize: 18, fontWeight: "800" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 8 },
  chip: {
    backgroundColor: c.input,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  chipText: { color: c.text, fontWeight: "700", fontSize: 12 },
});