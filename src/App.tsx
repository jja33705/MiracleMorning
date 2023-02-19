import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
