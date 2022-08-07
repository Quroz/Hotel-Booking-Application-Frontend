import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const HotelCard = ({hotels,index}) => {
  return (
    <View style = {styles.container}>
      <View style = {{flexDirection: "row", width: Dimensions.get("screen").width * 0.75}}>
       <Image
        source={hotels.image}
        style = {styles.image}
       />
        <View style = {styles.priceContainer}>
            <Text style = {{color: "white", fontWeight: "bold", fontSize: 20}}>${hotels.price}</Text>
        </View>
      </View>
      <View style = {{paddingHorizontal: 10}}>
      <View style = {{flexDirection: "row", marginTop: 10, justifyContent: "space-between"}}>
          <Text style = {{fontSize: 20, fontWeight: "bold"}}>{hotels.name}</Text>
          <Icon name = "bookmark-border" size = {28} color={"#40E0D0"}/>
      </View>
      <View>
          <Text style = {{fontSize: 15, color: "darkgrey", fontWeight: "bold"}}>{hotels.location}</Text>
      </View>
      <View style = {{flexDirection: "row", marginTop: 2, justifyContent: "space-between"}}>
          <View style = {{flexDirection: "row"}}>
            <Icon name = "star" size={15} color={"orange"}/>
            <Icon name = "star" size={15} color={"orange"}/>
            <Icon name = "star" size={15} color={"orange"}/>
            <Icon name = "star" size={15} color={"orange"}/>
            <Icon name = "star" size={15} color={"grey"}/>
           </View>
           <Text style = {{fontSize: 14, fontWeight: "bold", color: "darkgrey"}}>365 Reviews</Text>
      </View>
      </View>
    </View>
  )
}

export default HotelCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F8F8",
        width: Dimensions.get("screen").width * 0.75,
        height: 280,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 20,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    priceContainer: {
        backgroundColor: "#40E0D0",
        width: 70,
        height: 70,
        marginLeft: -70,
        borderTopRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})