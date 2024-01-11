import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../SearchInput";
import { styles } from "./styles";
import Adress from "../Adress";

export default function Header() {
  return (
    <View style={styles.container}>
      <Adress/>
       <SearchInput/>
    </View>
  )
}
