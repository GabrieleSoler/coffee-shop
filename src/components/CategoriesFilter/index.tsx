import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import CategoriesInput from "../CategoriesInput";

const CATEGORIES_TYPE = [
  {
    title: "ALL",
    id: 1,
  },
  {
    title: "COFFEE",
    id: 2,
  },
  {
    title: "CAKES",
    id: 3,
  }
];

export default function CategoriesFilter() {
  const [filterSelected, setSelected] = useState<number | null>(null);

  function handleSelectFilter(id: number) {
    setSelected(id);
  }

  return (
    <View style={styles.containerFilter}>
      {CATEGORIES_TYPE.map((item, index) => (
        <View key={item.id}>
          <CategoriesInput
            Title={item.title}
            onPress={() => handleSelectFilter(item.id)}
            FilterSelected={filterSelected}
            Id={item.id}
          />
        </View>
      ))}
    </View>
  );
}
