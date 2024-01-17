import { Pressable, StyleSheet, Text, View } from "react-native";
import SearchInput from "../SearchInput";
import { styles } from "./styles";
import Adress from "../Adress";
import CategoriesFilter from "../CategoriesFilter";
import FoodList from "../FoodList";

export default function Header() {
  return (
    <View style={styles.container}>
      <Adress />
      <SearchInput />
    </View>
  );
}
