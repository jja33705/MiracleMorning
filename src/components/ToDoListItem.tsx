import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ToDo from '../interfaces/ToDo';
import { numberToTwoDigits } from '../utils/formatting';
import { useAppDispatch } from '../hooks/hooks';
import { completeToDo } from '../reducers/toDoSlice';

type Props = {
  toDo: ToDo;
};

function ToDoListItem({ toDo }: Props) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <CheckBox
        value={toDo.completed}
        onValueChange={() => dispatch(completeToDo(toDo.id))}
      />
      <Text style={styles.title}>{toDo.content}</Text>
      <Text style={styles.time}>{`~ ${numberToTwoDigits(
        toDo.deadlineHour,
      )}:${numberToTwoDigits(toDo.deadlineMinute)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    flex: 1,
  },
  time: {
    fontSize: 20,
  },
});

export default ToDoListItem;
