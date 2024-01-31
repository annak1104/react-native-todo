/* eslint-disable no-use-before-define */
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  name: string;
  description: string;
  date: string;
  checked: boolean;
  onCheckedTask: () => void;
};

export const Task: React.FC<Props> = ({
  onPress,
  name,
  description,
  date,
  checked,
  onCheckedTask,
}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} onPress={onPress} />
        <View style={styles.itemRow}>
          <Text
            style={[
              styles.itemText,
              checked && styles.checkedItemText,
            ]}
          >
            {name}
          </Text>
          <Text style={styles.itemDescription}>{description}</Text>
          <Text style={styles.itemDate}>{date}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onCheckedTask}
        style={[styles.circle, checked && styles.checkedCircle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  itemRow: {
    flexDirection: "column",
    alignItems: "center",
  },
  itemText: {
    maxWidth: "100%",
    fontSize: 20,
  },
  itemDescription: {
    fontSize: 10,
  },
  itemDate: {
    fontSize: 12,
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
    marginLeft: 10,
  },
  checkedCircle: {
    backgroundColor: "#8FED8F",
  },
  checkedItemText: {
    textDecorationLine: "line-through",
  },
});
