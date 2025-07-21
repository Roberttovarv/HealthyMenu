import { Image, Text, View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDeatils } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";

export const MealItemScreen = ({ route }) => {
  const mealID = route.params.mealID;
  let meal = MEALS.find((meal) => meal.id === mealID);

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
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <View>
        <MealDeatils
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
      <View>
        <Subtitle>Ingredients</Subtitle>
        <FlatList
          data={ingredients}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Text>• {item}</Text>}
        />
        <Subtitle>Steps</Subtitle>
        <FlatList
          data={steps}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => <Text>{index + 1} - {item}</Text>}
        />
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },

  text: {

  },
})
