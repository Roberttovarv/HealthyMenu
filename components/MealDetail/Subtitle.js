import { StyleSheet, View, Text } from "react-native"

export const Subtitle = ({children}) => {
    return(
                <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{children}</Text>
                </View>
    )
}

styles = StyleSheet.create({
      subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 24,
    borderBottomColor: "white",
    borderBottomWidth: 2

  },
})