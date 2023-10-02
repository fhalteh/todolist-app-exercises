import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const onAddTaskPress = (text) => {
    setItems([...items, text]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {items.map((item, index) => {
            return <Task text={item} key={index}></Task>;
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTaskContainer}
      >
        <AddTask onAddTaskPress={onAddTaskPress} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1F1",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
  },
  items: {
    marginTop: 32,
  },
  addTaskContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});
