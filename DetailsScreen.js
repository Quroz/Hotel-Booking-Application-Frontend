import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {

  const item = route.params;

  return (
    <View styles = {styles.container}>
      <Image
      source={item.image}
      style = {styles.image}
      />
      <TouchableOpacity style = {{position: "absolute", margin: 20, marginVertical: 40}}
      onPress = {() => navigation.navigate("Home")}
      >
      <Icon name = "arrow-back-ios" size={28} color = "white"/>
      </TouchableOpacity>
       <Icon name = "bookmark-border" size={28} color = "white"
       style = {{position: "absolute", marginVertical: 40, alignSelf: "flex-end"}}
       />
       <View style = {styles.circleIcon}>
          <Icon name = "place" color={"white"} size={30}/>
       </View>
       <View style = {{marginTop: -50, paddingHorizontal: 20}}>
         <Text style = {{fontSize: 20, fontWeight: "bold"}}>{item.name}</Text>
         <Text style = {{fontSize: 15, fontWeight: "bold", color: "gray", marginTop: 5}}>{item.location}</Text>
          <View style = {{flexDirection: "row", marginTop: 2, justifyContent: "space-between"}}>
            <View style = {{flexDirection: "row", marginTop: 5}}>
              <Icon name = "star" size={16} color={"orange"}/>
              <Icon name = "star" size={16} color={"orange"}/>
              <Icon name = "star" size={16} color={"orange"}/>
              <Icon name = "star" size={16} color={"orange"}/>
              <Icon name = "star" size={16} color={"grey"}/>
           </View>
          <Text style = {{fontSize: 14, fontWeight: "bold", color: "darkgrey"}}>365 Reviews</Text>
        </View>
        <Text style = {{marginTop: 20, fontSize: 16, color: "gray"}}>{item.details}</Text>
        <View style = {{flexDirection: "row", marginTop: 15, justifyContent: "space-between"}}>
           <Text style = {{fontWeight: "bold", fontSize: 20}}>Price per night</Text>
           <View style = {{height: 40, width: 200, backgroundColor: "#40E0D0", marginRight: -20, justifyContent: "center", borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}>
             <Text style = {{marginLeft: 20, fontSize: 17, fontWeight: "bold"}}>${item.price}</Text>
           </View>
        </View>
        <TouchableOpacity style = {{padding: 25, backgroundColor: "#40E0D0", marginTop: 50, borderRadius: 25, justifyContent: "center", alignItems: "center"}}
        activeOpacity={0.5}
        >
          <Text style = {{fontSize: 20, fontWeight: "bold"}}>Book Now</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  circleIcon: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "#40E0D0",
    alignSelf: "flex-end",
    top: -40,
    justifyContent: "center",
    alignItems: "center",
  }
})