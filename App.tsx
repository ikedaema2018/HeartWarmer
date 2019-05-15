/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Counter from './containers/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './Reducer';

const store = createStore(appReducer);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Counter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
