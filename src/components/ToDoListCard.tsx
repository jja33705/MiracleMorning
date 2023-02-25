import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalLine from './HorizontalLine';
import ToDoListItem from './ToDoListItem';
import { useAppSelector } from '../hooks/hooks';
import { selectToDos } from '../store/reducers/toDoSlice';

function ToDoListCard() {
  const toDos = useAppSelector(selectToDos);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>해야 할 일</Text>
      <HorizontalLine />
      {toDos.map((toDo, index) => (
        <ToDoListItem toDo={toDo} key={index} index={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 15,
  },
});

export default ToDoListCard;
