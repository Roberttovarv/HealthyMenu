import { MEALS } from "../data/dummy-data";
import { MealsList } from "../components/MealsList/MealsList";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

export const FavoritesScreen = () => {
  const favedMealsIds = useSelector(state => state.favoriteMeals.ids)
  const favedMeals = MEALS.filter((meal) =>
    favedMealsIds.includes(meal.id)
  );

  if (favedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favedMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D9A299"
  },
});
