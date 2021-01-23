import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

// middleware
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// reducer
import {AllReducers} from './Reducer/AllReducers';

// saga
import AllSaga from './Saga/AllSaga';

const persistConfig = {
  key: 'rnbnb',
  storage: AsyncStorage,
};

const SagaMiddleWare = createSagaMiddleWare();

// register saga middleware
const AllMiddleWare = applyMiddleware(SagaMiddleWare, logger);

// subtitute persist config and add reducer
const PersistedReducer = persistReducer(persistConfig, AllReducers);

// created store
export const Store = createStore(PersistedReducer, AllMiddleWare);

// create current store persisted
export const Persistor = persistStore(Store);

SagaMiddleWare.run(AllSaga);
