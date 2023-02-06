import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

function ToDoListItem() {
  return (
    <View style={styles.container}>
      <CheckBox value={true} />
      <Text>운동</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ToDoListItem;
