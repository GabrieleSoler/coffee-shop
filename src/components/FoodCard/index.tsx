import { Text, View } from "react-native";
import { styles } from "./styles";
import CardTitle from "./Title/Index";
import { PRODUCTS } from "../../data/products";

export default function FoodCard() {
  return (
    <View>
      {PRODUCTS.map((item, index) => (
        <View style={styles.container}>
        <CardTitle title={item.name}/>
        </View>
      ))}
    </View>
  )
}
