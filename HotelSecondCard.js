import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

const HotelSecondCard = ({hotels, index}) => {
  return (
    <View style = {styles.container}>
      <Image
       source={hotels.image}
       style = {styles.image}
      />
      <Text style = {{marginTop: 10, fontWeight: "bold", fontSize: 15}}>{hotels.name}</Text>
    </View>
  )
}

export default HotelSecondCard

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width * 0.5,
        height:  Dimensions.get("screen").height * 0.2,
        backgroundColor: "#F8F8F8",
        marginLeft: 20,
        borderRadius: 20
    },
    image: {
        width: "100%",
        height: "70%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        resizeMode: "cover"
    }
})