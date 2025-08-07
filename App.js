import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoriesScreen } from "./screens/CategoriesScreens";
import { MealsOverviewScreen } from "./screens/MealsOverViewScreen";
import { MealItemScreen } from "./screens/MealItemScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#D9A299" },
        headerTintColor: "#FFFFFF",
        sceneContainerStyle: { backgroundColor: "#F7E3DF" },
        drawerContentContainerStyle: { backgroundColor: "#D9A299" },
        drawerInactiveTintColor: "wheat",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Meals Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
      options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }} />
    </Drawer.Navigator>
  );
};

export default function App({}) {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
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
              component={DrawerNavigator}
              options={{
                title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealItemScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
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
