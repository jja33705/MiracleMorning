import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import type { RootStackParamList } from '../navigation/RootStackNavigator';
import TimeCard from '../components/TimeCard';
import ToDoListCard from '../components/ToDoListCard';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <TimeCard />
      <ToDoListCard />
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('Setting')} title="설정" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    padding: 10,
  },
  text: {
    margin: 0,
    padding: 0,
    fontSize: 100,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default Home;
