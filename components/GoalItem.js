import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.index)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    padding: 8,
    margin: 8,
    borderRadius: 6,
    color: "white",
  },

  goalText: {
    color: "white",
  },
});

export default GoalItem;
