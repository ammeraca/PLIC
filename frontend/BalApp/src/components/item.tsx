import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Item({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightyellow',
    borderStyle: 'dashed',
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 16,
  },
});
