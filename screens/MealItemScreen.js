import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import { IconButton } from "../components/MealDetail/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
export const MealItemScreen = ({ route, navigation }) => {
  const favMealsContext = useContext(FavoritesContext);

  const mealID = route.params.mealID;
  let meal = MEALS.find((meal) => meal.id === mealID);

  const mealIsFaved = favMealsContext.ids.includes(mealID);

  const headerButtonHandler = () => {
    if (!mealIsFaved) {
      favMealsContext.addFavorite(mealID)
      return
    }
    favMealsContext.removeFavorite(mealID)
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonHandler}
            icon={mealIsFaved ? "heart" : "heart-outline"}
            color={mealIsFaved ? "red" : "white"}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  const {
    duration,
    complexity,
    affordability,
    title,
    imageUrl,
    ingredients,
    steps,
  } = meal;

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
      <View style={styles.ListOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} element={"•"} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#000000CC",
  },

  ListOuterContainer: {
    alignItems: "center",
  },

  listContainer: {
    width: "80%",
  },
});
