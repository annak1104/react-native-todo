/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import { Tasks } from "../types/Tasks";

type Props = {
  onAddTask: (task: Tasks) => void;
};

export const TasksInput: React.FC<Props> = ({ onAddTask }) => {
  const [task, setTask] = useState({ name: "", description: "", date: "" });
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (
      task.name.trim() !== "" &&
      task.description.trim() !== "" &&
      task.date.trim() !== ""
    ) {
      onAddTask(task);
      setTask({ name: "", description: "", date: "" });
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.writeTaskWrapper, { marginBottom: keyboardHeight }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter task name"
          value={task.name}
          onChangeText={(text) => setTask({ ...task, name: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter task description"
          value={task.description}
          onChangeText={(text) => setTask({ ...task, description: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter date"
          value={task.date}
          onChangeText={(text) => setTask({ ...task, date: text })}
        />
      </View>

      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addTextButton}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 15,
  },
  inputRow: {
    gap: 5,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 250,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#C0C0C0",
    backgroundColor: "#FFF",
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55BCF6",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addTextButton: {},
});
