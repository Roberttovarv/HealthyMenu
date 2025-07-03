import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export const MealItem = ({ title, imageUrl, complexity, affordability, duration }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View>
            <Text>{duration} mins</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
