import React from 'react'
import { Text, View } from 'react-native'

export default function CardTitle({title} : { title: string}) {
  return (
    <View>
        <Text>{title}</Text>
    </View>
  )
}
