/* eslint-disable no-use-before-define */
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  text: string;
};

export const Task: React.FC<Props> = ({ onPress, text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} onPress={onPress} />
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circle} />
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
  itemText: {
    maxWidth: "80%",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
    marginLeft: 10,
  },
});
