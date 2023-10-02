import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
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
