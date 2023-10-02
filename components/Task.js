import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>The perfect task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
  },
  itemText: {
    fontSize: 17,
    maxWidth: "80%",
  },
});

export default Task;
