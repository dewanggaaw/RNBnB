import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Shared/Router/Navigation';

// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, Store} from './src/Store/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
