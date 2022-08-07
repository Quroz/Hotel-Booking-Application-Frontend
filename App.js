// @refresh state
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "./src/views/screens/HomeScreen";
import DetailsScreen from "./src/views/screens/DetailsScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
   </NavigationContainer>

  );
}

