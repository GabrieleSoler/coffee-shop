import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../../components/Header'
import FoodList from '../../components/FoodList'
import { styles } from './styles'
import FoodCard from '../../components/FoodCard'

export default function Home() {
  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.foodContainer}>
        <View >
            <FoodList/>
        </View>
      </View>
    </View>
  )
}
