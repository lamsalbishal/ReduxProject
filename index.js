/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {applyMiddleware, createStore} from 'redux';

import {Provider} from 'react-redux';

import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {PersistGate} from 'redux-persist/lib/integration/react';
import FSStorage from 'redux-persist-fs-storage';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './src/reducers/index';

const middleware = [thunk, logger];

const persistConfig = {
  key: 'root',
  storage: FSStorage(),
  keyPrefix: '',
  stateReconciler: autoMergeLevel2,
};

const preducer = persistReducer(persistConfig, reducers);

const store = createStore(preducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

const RNDemo = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNDemo);
