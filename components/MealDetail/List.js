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
              {element ? element : index + 1 + " -"}
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
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  itemText: {
    color: "black",
    textAlign: "center",
  },
});
