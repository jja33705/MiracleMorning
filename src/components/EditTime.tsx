import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useAppSelector } from '../hooks/hooks';
import {
  selectRisingHour,
  selectRisingMinute,
} from '../store/reducers/timeSlice';
import { numberToTwoDigits } from '../utils/formatting';
import DateTimePicker from '@react-native-community/datetimepicker';

function EditTime() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const risingHour = useAppSelector(selectRisingHour);
  const risingMinute = useAppSelector(selectRisingMinute);

  const onPress = () => {
    setShow(true);
  };

  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#e6e6e6' : 'white',
          },
        ]}>
        <View style={styles.container}>
          <Text style={styles.title}>기상시간</Text>
          <Text style={styles.time}>{`${numberToTwoDigits(
            risingHour,
          )}:${numberToTwoDigits(risingMinute)}`}</Text>
        </View>
      </Pressable>
      {show && <DateTimePicker mode="time" value={date} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 15,
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  time: {
    marginLeft: 20,
    fontSize: 20,
  },
});

export default EditTime;
