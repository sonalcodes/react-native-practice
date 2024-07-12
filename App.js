import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  return (
    <View>
      <Text>Hello World!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default function App() {
//   const [modalIsVisible, setModalisVisible] = useState(false);
//   const [courseGoals, setCourseGoals] = useState([]);

//   function addGoalHandler(enteredText) {
//     //setCourseGoals([...courseGoals, enteredGoatText]);
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       enteredText,
//     ]);
//     changeVisibilityOfModalSheet();
//   }

//   function deleteGoalHandler(indexTobeDeleted) {
//     console.log(indexTobeDeleted);
//     setCourseGoals((currentCourseGoals) => {
//       return currentCourseGoals.filter(
//         (goal, index) => index != indexTobeDeleted
//       );
//     });
//   }

//   function changeVisibilityOfModalSheet() {
//     console.log("Cancel");
//     if (modalIsVisible) setModalisVisible(false);
//   }

//   return (
//     <View style={styles.appContainer}>
//       <Button
//         title="Add new Goal"
//         color="#5e0acc"
//         onPress={() => {
//           modalIsVisible ? setModalisVisible(false) : setModalisVisible(true);
//         }}
//       />
//       <GoalInput
//         isVisible={modalIsVisible}
//         onAddGoal={addGoalHandler}
//         onCancelGoal={changeVisibilityOfModalSheet}
//       />

//       <View style={styles.goalsContainer}>
//         <FlatList
//           data={courseGoals}
//           renderItem={(itemData) => {
//             return (
//               <GoalItem
//                 text={itemData.item}
//                 onDeleteItem={deleteGoalHandler}
//                 index={itemData.index}
//               />
//             );
//           }}
//           keyExtractor={(item, index) => {
//             return index;
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     paddingTop: 50,
//     flex: 1,
//     paddingHorizontal: 16,
//   },

//   goalsContainer: {
//     flex: 5,
//   },
// });
