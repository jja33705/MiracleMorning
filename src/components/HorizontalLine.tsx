import React from 'react';
import { StyleSheet, View } from 'react-native';

function HorizontalLine() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    borderTopColor: 'silver',
  },
});

export default HorizontalLine;
