/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';

type Props = {
  onAddTask: (task: string) => void;
};

export const Input: React.FC<Props> = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.writeTaskWrapper, { marginBottom: keyboardHeight }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addTextButton}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 15,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 250,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#C0C0C0',
    backgroundColor: '#FFF',
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55BCF6',
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addTextButton: {},
});
