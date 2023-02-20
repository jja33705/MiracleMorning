import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ToDo from '../interfaces/ToDo';
import { numberToTwoDigits } from '../utils/formatting';

type Props = {
  toDo: ToDo;
};

function ToDoListItem({ toDo }: Props) {
  return (
    <View style={styles.container}>
      <CheckBox value={toDo.completed} />
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
