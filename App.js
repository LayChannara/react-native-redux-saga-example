/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import SwitchNavigator from './src/containers/switch/switch-navigator'
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSagas from "./src/redux/sagas"
import { rootReducer } from "./src/redux/reducers"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSagas);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<SwitchNavigator />
			</Provider>
		);
	}
}
