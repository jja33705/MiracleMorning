import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/RootStackNavigator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ route, navigation }: HomeProps) {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button onPress={() => navigation.navigate('Setting')} title="Setting" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
  },
});

export default Home;
