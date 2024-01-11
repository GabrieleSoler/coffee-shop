import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";

type CategoriesFilterProps = PressableProps & {
  Title: string | undefined;
  FilterSelected?: number | null;
  Id: number | null;
  onPress: Function;
};

export default function CategoriesInput({
  Title,
  FilterSelected,
  Id,
  onPress,
}: CategoriesFilterProps) {
  return (
    <Pressable
      style={FilterSelected === Id ? styles.checkedPressable : styles.pressable}
      onPress={onPress}
    >
      <Text style={FilterSelected === Id ? styles.title : null}>{Title}</Text>
    </Pressable>
  );
}
