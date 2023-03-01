import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function Loading() {
  return <Text>Loading...</Text>;
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
