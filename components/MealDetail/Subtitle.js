import { StyleSheet, View, Text } from "react-native"

export const Subtitle = ({children}) => {
    return(
                <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{children}</Text>
                </View>
    )
}

const styles = StyleSheet.create({
      subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000CC"
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    borderBottomColor: "#FFFFFFb3",
    borderBottomWidth: 2

  },
})