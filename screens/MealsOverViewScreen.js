import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";

export const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;
  const categoryTitle = route.params.categoryTitle;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return <MealItem {...mealItemProps}/>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
