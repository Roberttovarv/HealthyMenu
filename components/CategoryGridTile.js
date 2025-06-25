import { Pressable, Text, View, StyleSheet } from "react-native";

export const CategoryGridTile = ({ title, color }) => {
  return(
    <View style={styles.gridItem}>
      <Pressable style={styles.button}>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
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
        width: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: 1,
        shadowOpacity: 1,
        shadowRadius: 10,
        borderColor: "#000",
        borderWidth: 3
    },
    button:{
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    }
})