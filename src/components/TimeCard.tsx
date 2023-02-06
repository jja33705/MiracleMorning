import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function TimeCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>기상시간</Text>
      <Text style={styles.time}>06:00</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressNumber}>1</Text>
        <Text style={styles.progressText}>일째 성공중</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  time: {
    textAlign: 'center',
    fontSize: 80,
    color: 'black',
    fontWeight: '400',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressNumber: {
    fontSize: 20,
    color: 'green',
  },
  progressText: {
    fontSize: 20,
    color: 'black',
  },
});

export default TimeCard;
