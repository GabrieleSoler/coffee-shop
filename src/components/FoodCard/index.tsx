import { Text, View } from "react-native";
import { styles } from "./styles";
import CardTitle from "./Title/Index";

type FoodCardProps = {
  title: string;
  price: number | null;
  size: string | null;
};

export default function FoodCard({ title, price, size }: FoodCardProps) {
  return (
    <View style={styles.cardContainer}>
      <CardTitle title={title} />
    </View>
  );
}
