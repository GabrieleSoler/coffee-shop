import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#626262"
      ></TextInput>

      <View style={styles.icon}>
        <Ionicons name="search" size={24} color="white" />
      </View>
      
    </View>
  );
}
