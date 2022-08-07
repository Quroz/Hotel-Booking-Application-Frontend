import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const options = ["All", "Popular", "Top Rated", "Featured", "Luxury"]

const Options = () => {

const [pressed, setPressed] = useState(null)
function pressHandler(index) {
 setPressed(index)
}


  return (
    <View style = {styles.container}>
      {options.map((item,index) => (
          <TouchableOpacity key = {index} onPress={() => pressHandler(index)}>
              <Text style = {{
                   color: pressed === index ? "#40E0D0" : "black",
                   fontSize: 15, 
                   fontWeight: "bold",

                  }}>{item}</Text>
                  <View style = {{backgroundColor: pressed === index ?"#40E0D0" : "#F8F8F8", width: 35, height: 5, borderRadius: 10}}/>
          </TouchableOpacity>
      ))}
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
    }
})