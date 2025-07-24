import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

export const CategoryGridTile = ({ title, color, pressed }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressed}
      >
        <View style={[styles.innerContainer, { backgroundColor: color + "80" }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "#820000",
    shadowOpacity: 0.35,
    shadowOffset: { width: -2, height: 2 },
    shadowRadius: 5,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000CC"
  },
});
