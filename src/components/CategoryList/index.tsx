import { ReactNode } from "react";
import { Text, View } from "react-native";

type CategoryListProps = {
    categoryText: string,
    children: ReactNode
}

export default function CategoryList({categoryText, children}: CategoryListProps) {
  return (
    <View>
        <Text>{categoryText}</Text>
        {children}
    </View>
  )
}
