import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoatText, setEnteredGoalText] = useState("");

  function goalInputhandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/img.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputhandler}
          placeholder="Add your goal"
          cursorColor="#fff"
          placeholderTextColor="#fff"
          color="#fff"
          value={enteredGoatText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#f31282"
              onPress={() => {
                props.onAddGoal(enteredGoatText);
                setEnteredGoalText("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#f31282"
              title="Cancel"
              onPress={props.onCancelGoal}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 16,
    marginRight: 10,
    borderRadius: 24,
    width: "90%",

    borderColor: "#ccc",
  },

  image: {
    width: 200,
    height: 200,
    margin: 20,
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",

    marginTop: 16,
    marginHorizontal: 8,
  },
});
