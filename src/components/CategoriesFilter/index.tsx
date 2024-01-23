import React, { useContext, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import CategoriesInput from "../CategoriesInput";
import { FilterContext } from "../../Contexts/filter";

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
  const { getFilter, filter } = useContext(FilterContext);

  function handleSelectFilter(id: number) {
    getFilter(id)
  }

  return (
    <View style={styles.containerFilter}>
      {CATEGORIES_TYPE.map((item, index) => (
        <View key={item.id}>
          <CategoriesInput
            Title={item.title}
            onPress={() => handleSelectFilter(item.id)}
            FilterSelected={filter}
            Id={item.id}
          />
        </View>
      ))}
    </View>
  );
}
