import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          <View style={styles.item}><Text style={styles.itemText}>Task 1</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>Task 2</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>Task 3</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>Task 4</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>Task 5</Text></View>
          <View style={styles.item}><Text style={styles.itemText}>Task 6</Text></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  item: {
    marginBottom: 16,
  },
  itemText: {
    fontSize: 17,
    maxWidth: "80%",
  }
});
