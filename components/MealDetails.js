import { View, Text, StyleSheet } from "react-native"

export const MealDeatils = ({duration, complexity, affordability}) => {
    return (
                <View style={styles.details}>
                  <Text style={styles.detailItem}>• {duration} mins</Text>
                  <Text style={styles.detailItem}>• {complexity.toUpperCase()}</Text>
                  <Text style={styles.detailItem}>• {affordability.toUpperCase()}</Text>
                </View>
    )
}

const styles = StyleSheet.create({
    details: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 14,
    margin: 4,
  },
})