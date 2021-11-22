import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    getUncompletedTodos(todos);
  }, [todos]);

  const addNewTodo = title => {
    if (title === '') {
      Alert.alert('Lütfen yapılacak bir görev ekleyiniz..');
    } else if (todos.some(todo => todo.title === title)) {
      Alert.alert('Aynı isimde bir göreviniz var!');
    } else {
      setTodos([...todos, {id: Date.now(), title: title, completed: false}]);
      setNewTitle('');
    }
  };

  const longPressHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    Alert.alert('Başarıyla silindi..');
  };

  const toggleHandler = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : {...todo},
      ),
    );
  };

  const getUncompletedTodos = tasks => {
    const unCompletedTodos = tasks.filter(task => task.completed === false);
    setCount(unCompletedTodos.length);
  };

  return (
    <View style={styles.container}>
      <Header count={count} />
      <AddTodo
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        addNewTodo={addNewTodo}
      />
      <TodoList
        todos={todos}
        toggleHandler={toggleHandler}
        longPressHandler={longPressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});

export default App;
