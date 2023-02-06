import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalLine from './HorizontalLine';
import ToDoListItem from './ToDoListItem';

function ToDoListCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>해야 할 일</Text>
      <HorizontalLine />
      <ToDoListItem />
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
