import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Text style={styles.dummyText}>Another Piece of Text</Text>
      <Button title="Tap Me!" />
    </View>
  );
}

// we get auto-completion and validation (warnings and errors) when we use stylesheet object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 4,
    padding: 20,
  },
});
