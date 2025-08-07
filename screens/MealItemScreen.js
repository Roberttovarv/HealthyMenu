import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import { IconButton } from "../components/MealDetail/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export const MealItemScreen = ({ route, navigation }) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealID = route.params.mealID;
  let meal = MEALS.find((meal) => meal.id === mealID);

  const mealIsFaved = favoriteMealIds.includes(mealID);

  const headerButtonHandler = () => {
    if (!mealIsFaved) {
      dispatch(addFavorite({id: mealID}));
      return;
    }
    dispatch(removeFavorite({id: mealID}));
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
