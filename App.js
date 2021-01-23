import React from 'react';
import {View, Text} from 'react-native';

// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, Store} from './src/Store/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <View>
          <Text>Halo RNBnB</Text>
        </View>
      </PersistGate>
    </Provider>
  );
}
