import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CategoriesScreen } from "./screens/CategoriesScreens";
import { MealsOverviewScreen } from "./screens/MealsOverViewScreen";
import { MealItemScreen } from "./screens/MealItemScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const DrawerNavigatior = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = "Meals Categories" component={CategoriesScreen}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App({}) {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#D9A299" },
              headerTintColor: "#FFFFFF",
              contentStyle: { backgroundColor: "#F7E3DF" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigatior}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealItemScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24180f",
    flex: 1,
    justifyContent: "center",
  },
});
