import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../hooks/hooks';
import {
  selectProgressDay,
  selectRisingHour,
  selectRisingMinute,
} from '../reducers/timeSlice';
import { numberToTwoDigits } from '../utils/formatting';

function TimeCard() {
  const progressDay = useAppSelector(selectProgressDay);
  const risingHour = useAppSelector(selectRisingHour);
  const risingMinute = useAppSelector(selectRisingMinute);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>기상시간</Text>
      <Text style={styles.time}>{`${numberToTwoDigits(
        risingHour,
      )}:${numberToTwoDigits(risingMinute)}`}</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressDay}>{progressDay}</Text>
        <Text style={styles.progressText}>일째 성공중!</Text>
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
  progressDay: {
    fontSize: 20,
    color: 'green',
  },
  progressText: {
    fontSize: 20,
    color: 'black',
  },
});

export default TimeCard;
