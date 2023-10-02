import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [items, setItems] = useState([]);

  const handleTaskPressed = async (index) => {
    console.log("Handle task pressed");
    console.log(items)
    console.log(index)
    let updatedTasks = [...items];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setItems(updatedTasks);
  
    try {
      // Save the updated task list to AsyncStorage
      await AsyncStorage.setItem("task-list", JSON.stringify([updatedTasks]));
    } catch (error) {
      console.error("Error saving tasks to AsyncStorage: ", error);
    }
  };

  const onAddTaskPress = async (text) => {
    // Update the tasks
    const updatedTasks = [...items, { text: text, isCompleted: false }]
    setItems(updatedTasks);

    console.log(updatedTasks)
    try {
      await AsyncStorage.setItem("task-list", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Error saving tasks to AsyncStorage: ", error);
    }
  };

  useEffect(() => {
    // Load the task list from AsyncStorage
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("task-list");
        if (storedTasks !== null) {
          setItems(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error("Error loading tasks from AsyncStorage: ", error);
      }
    };

    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {items.map((item, index) => {
            return <Task text={item.text} isCompleted={item.isCompleted} key={index} onPress={ () => handleTaskPressed(index) }></Task>;
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
