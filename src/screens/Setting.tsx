import React from 'react';
import { StyleSheet, View } from 'react-native';
import EditTime from '../components/EditTime';
import HorizontalLine from '../components/HorizontalLine';

function Setting() {
  return (
    <View style={styles.container}>
      <EditTime />
      <HorizontalLine />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Setting;
