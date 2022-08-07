import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Options from './Options';
import hotels from "../../const/hotels"
import HotelCard from './HotelCard';
import HotelSecondCard from './HotelSecondCard';

const HomeScreen = ({navigation}) => {

  return (
   <View style = {styles.container}>
       <View style = {styles.headerContainer}>
            <View>
                <Text style = {{fontSize: 30, fontWeight: "bold"}}>Find your hotel</Text>
                <View style = {{marginTop: 5}}><Text style = {{fontSize: 30, fontWeight: "bold"}}>in <Text style = {{color: "#40E0D0"}}>Paris</Text></Text></View>
            </View>
           <Icon name = "person-outline" size={40} color={"gray"}/>
       </View>
       <View style = {styles.searchBarContainer}>
           <Icon name = "search" size={20} color={"gray"}/>
            <TextInput
            placeholder='Search'
            placeholderTextColor={"#A8A8A8"}
            style = {{marginLeft: 10, fontSize: 16}}
            value = {""}
            onChangeText={text => {}}
            />
       </View>
         <Options/>
          <View style = {{marginTop: 10}}>
           <FlatList
            horizontal
            data = {hotels}
            showsHorizontalScrollIndicator = {false}
            renderItem={({item, index}) =>
              <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Details", item)}
              ><HotelCard hotels = {item} index = {index} /></TouchableOpacity>
           }
           />
        </View>
        <View style = {{marginTop: 15, flexDirection: "row", justifyContent: "space-between"}}>
          <Text style = {{fontSize: 15, color: "gray", fontWeight: "bold"}}>Top hotels</Text>
          <TouchableOpacity><Text style = {{fontSize: 15, color: "gray", fontWeight: "bold"}}>Show all</Text></TouchableOpacity>
       </View>
       <FlatList
       contentContainerStyle = {{marginTop: 20}}
       horizontal
       showsHorizontalScrollIndicator = {false}
       data = {hotels}
       renderItem={({item, index}) =>
              <HotelSecondCard hotels = {item} index = {index} />
           }
       />
   </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F8F8F8"
    },
    headerContainer: {
        flexDirection: "row",
        paddingVertical: 40,
        justifyContent: "space-between"
    },
    searchBarContainer: {
        flexDirection: "row",
        padding: 18,
        borderRadius: 20,
        backgroundColor: "#E8E8E8",
        marginTop: -20
    },
})