import { Text, View, StyleSheet, FlatList } from "react-native";

export const List = ({ data, element }) => {
  return (
    <View style={styles.listItem}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => <Text style={styles.itemText}>{element ? element : index + 1 + " -"} {item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
