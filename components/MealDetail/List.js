import { Text, View, StyleSheet, FlatList } from "react-native";

export const List = ({ data, element }) => {
  return (
    <View style={[styles.listItem]}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.rowContainer}>
            <Text style={styles.itemText}>
              {element ? element : index + 1 + " - "}
            </Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "start",
    marginVertical: 3,
    marginHorizontal: 2

  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 2,
    backgroundColor: "#FFFFFFB3",
  },
  itemText: {
    color: "#000000B3",
    textAlign: "left",
    flexShrink: 1,
    flexWrap: "wrap",
    marginHorizontal: 5
  },
});
