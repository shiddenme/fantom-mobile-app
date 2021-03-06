/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import "~/utils/shim";

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigator from '~/navigation/RootNavigator';
import { NavigationService } from '~/navigation/helpers';
import { store, persistor } from '~/redux/store';
import DropdownNotification from '~/components/DropdownNotification';
console.disableYellowBox = true; 
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <>
        <StatusBar barStyle="light-content" />
        <RootNavigator ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
        <DropdownNotification />
      </>
    </PersistGate>
  </Provider>
);
