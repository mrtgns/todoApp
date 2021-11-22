import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './AddTodoSteyles';

const AddTodo = ({newTitle, setNewTitle, addNewTodo}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTitle}
        placeholder="Görev ekle..."
        placeholderTextColor="#86888A"
        onChangeText={text => setNewTitle(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addNewTodo(newTitle)}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
