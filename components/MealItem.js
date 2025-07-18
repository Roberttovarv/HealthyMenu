import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export const MealItem = ({
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => 
          pressed ? styles.buttonPressed : null}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <View style={styles.deatails}>
            <Text style={styles.detailItem}>{duration} mins</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
    buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  deatails: {
    flex: "row",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
    margin: 4,
  },
});
