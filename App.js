import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CategoriesScreen } from "./screens/CategoriesScreens";
import { MealsOverviewScreen } from "./screens/MealsOverViewScreen";
import { MealItemScreen } from "./screens/MealItemScreen";

const Stack = createNativeStackNavigator();

export default function App({}) {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "pink" },
              headerTintColor: "black",
              contentStyle: { backgroundColor: "pink" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={CategoriesScreen}
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
