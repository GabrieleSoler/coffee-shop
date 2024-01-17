import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FoodCard from "../FoodCard";

import { PRODUCTS } from "../../data/products";
import { styles } from "./styles";
import CategoriesFilter from "../CategoriesFilter";
import CategoryList from "../CategoryList";

export default function FoodList() {

  function groupByCategory(products: typeof PRODUCTS) {
    return products.reduce((acc, current) => {
      if (!acc[current.type]) acc[current.type] = [];
      acc[current.type].push(current);
      return acc;
    }, {} as { [key: number]: typeof PRODUCTS });
  }

  function filterProducts(groupedProducts: ReturnType<typeof groupByCategory>, allowedCategories: Array<number>) {
    if (allowedCategories.length == 0) return groupedProducts;

    return Object.keys(groupedProducts)
      .filter((category) => allowedCategories.includes(Number(category)))
      .reduce((acc, current) => {
        acc[Number(current)] = groupedProducts[Number(current)];
        return acc;
      }, {} as { [key: string]: typeof PRODUCTS });
  }

  const groupedProducts = groupByCategory(PRODUCTS);

  console.log(groupedProducts[2])

  return (
    <View>
      <View style={styles.containerFilter}>
        <Text style={styles.title}>Categories</Text>
        <CategoriesFilter />
      </View>
      <ScrollView horizontal>
        <View style={styles.container}>
          {Object.keys(groupedProducts).map((item, index) => (
            <View key={index}>
              <CategoryList categoryText={item}>
                {groupedProducts[Number(item)].map((item, index) => {
                  return <FoodCard
                    key={index}
                    title={item.name}
                    price={item.price}
                    size={item.size}
                  />
                })}
              </CategoryList>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
