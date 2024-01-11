import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import FoodCard from './src/components/FoodCard';
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text></Text>
      <Header/>
     <View>
      <FoodCard/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    // alignItems: 'center',
    padding: 30
  },
});
