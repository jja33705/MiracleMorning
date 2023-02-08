import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

function ToDoListItem() {
  return (
    <View style={styles.container}>
      <CheckBox value={true} />
      <Text style={styles.title}>운동</Text>
      <Text style={styles.time}>~ 07:00</Text>
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
