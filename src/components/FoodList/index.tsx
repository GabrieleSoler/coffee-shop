import React, { useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FoodCard from "../FoodCard";

import { PRODUCTS } from "../../data/products";
import { styles } from "./styles";
import CategoriesFilter from "../CategoriesFilter";
import CategoryList from "../CategoryList";
import { FilterContext } from "../../Contexts/filter";

export default function FoodList() {
  const { filter } = useContext(FilterContext);

  function groupByCategory(products: typeof PRODUCTS) {
    return products.reduce((acc, current) => {
      if (!acc[current.type]) acc[current.type] = [];
      acc[current.type].push(current);
      return acc;
    }, {} as { [key: number]: typeof PRODUCTS });
  }

  function filterProducts(groupedProducts: ReturnType<typeof groupByCategory>, allowedCategories: Array<number | null>) {
    // debugger
    console.log(allowedCategories)
    if (allowedCategories.includes(1)) return groupedProducts;

    return Object.keys(groupedProducts)
      .filter((category) => allowedCategories.includes(Number(category)))
      .reduce((acc, current) => {
        acc[Number(current)] = groupedProducts[Number(current)];
        return acc;
      }, {} as { [key: string]: typeof PRODUCTS });
  }

  const groupedProducts = groupByCategory(PRODUCTS);

  const filteredProduct = filterProducts(groupedProducts, [filter])

  console.log(filteredProduct)

  return (
    <View>
      <View style={styles.containerFilter}>
        <Text style={styles.title}>Categories</Text>
        <CategoriesFilter />
      </View>
      <View>
        <View style={styles.container}>
          {Object.keys(filteredProduct).map((item, index) => (
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
      </View>
    </View>
  );
}
