import { Pressable, StyleSheet, Text, View } from "react-native";
import SearchInput from "../SearchInput";
import { styles } from "./styles";
import Adress from "../Adress";
import CategoriesFilter from "../CategoriesFilter";
import { useState } from "react";
import FoodCard from "../FoodCard";

export default function Header() {
  return (
    <View style={styles.container}>
      <Adress />
      <SearchInput />

      <View style={styles.containerFilter}>
        <Text style={styles.title}>Categories</Text>
        <CategoriesFilter />
         {/* <FoodCard/> */}
      </View>
    </View>
  );
}
