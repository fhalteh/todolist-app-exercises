import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          <Task text="Task 1" />
          <Task text="Task 2" />
          <Task text="Task 3" />
          <Task text="Task 4" />
          <Task text="Task 5" />
          <Task text="Task 6" />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTaskContainer}
      >
        <AddTask />
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
