import { Text, FlatList } from "react-native";
import { MealItem } from "../components/MealItem";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  const favMealsContext = useContext(FavoritesContext);

  const favedMeals = MEALS.filter(meal => favMealsContext.ids.includes(meal.id))

const renderMeal = ({ item }) => (
  <MealItem
    title={item.title}
    imageUrl={item.imageUrl}
    complexity={item.complexity}
    affordability={item.affordability}
    duration={item.duration}
    id={item.id}
  />
);

  return (
    <>
      <FlatList
        data={favedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </>
  );
};
