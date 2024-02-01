/* eslint-disable no-use-before-define */
import { StyleSheet, Text, View } from "react-native";

import React, { useState } from "react";
import { Task } from "./components/Task";
import { TasksInput } from "./components/TasksInput";
import { Tasks } from "./types/Tasks";

export default function App() {
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = (task: Tasks) => {
    setTaskItems([...taskItems, { ...task, checked: false }]);
  };

  const handleDeleteTask = (index: number) => {
    const copyTaskItems = [...taskItems];
    copyTaskItems.splice(index, 1);
    setTaskItems(copyTaskItems);
  };

  const handleCheckedTask = (index: number) => {
    const copyTaskItems = [...taskItems];
    copyTaskItems[index].checked = !copyTaskItems[index].checked;
    setTaskItems(copyTaskItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasksTitle}>Todo app</Text>
        <View style={styles.items}>
          {taskItems.map((task, index) => (
            <Task
              key={index}
              name={task.name}
              description={task.description}
              date ={task.date}
              onPress={() => handleDeleteTask(index)}
              checked={task.checked}
              onCheckedTask={() => handleCheckedTask(index)}
            />
          ))}
        </View>
      </View>
      <View style={styles.writeTaskWrapper}>
        <TasksInput onAddTask={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tasksTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    width: "100%",
  },
});
