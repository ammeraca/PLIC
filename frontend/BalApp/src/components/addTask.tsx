import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export default function Task({submitHandler}) {
  const [text, setText] = useState('');

  return (
    <View style={styles.taskContainer}>
      <TextInput
        style={styles.taskText}
        placeholder="New..."
        // eslint-disable-next-line no-shadow
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button
        onPress={() => {
          setText('');
          submitHandler(text);
        }}
        title={'Add'}
        color="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskText: {
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 3,
  },
  taskContainer: {
    flexDirection: 'row',
  },
});
