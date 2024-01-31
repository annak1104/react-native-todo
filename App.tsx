/* eslint-disable no-use-before-define */
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, { useState } from 'react';
import { Task } from './components/Task';
import { Input } from './components/Input';

export default function App() {
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = (task: string) => {
    setTaskItems([...taskItems, task]);
  };

  const handleDeleteTask = (index: number) => {
    const copyTaskItems = [...taskItems];
    copyTaskItems.splice(index, 1);
    setTaskItems(copyTaskItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasksTitle}>Todo app</Text>
        <View style={styles.items}>
          {taskItems.map((task) => (
            <Task
              key={task}
              text={task}
              onPress={() => handleDeleteTask(taskItems.indexOf(task))}
            />
          ))}
        </View>
      </View>
      <View style={styles.writeTaskWrapper}>
        <Input onAddTask={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    width: '100%',
  },
});
