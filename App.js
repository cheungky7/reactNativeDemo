import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
//import { StackNavigator } from 'react-navigation';
import { AppNavigator, navReducer } from './src/reducer';
//import logger from 'redux-logger';
//import navigation from './src/reducer';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
  //  createNavigationReducer,
  } from 'react-navigation-redux-helpers';

//import Navigator from './src/Navigator';
//import navigation from ''

//const AppNavigator = createStackNavigator(AppRouteConfigs);


//const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    //nav: navReducer,
   nav: navReducer
  });

  const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
  
  const App = reduxifyNavigator(AppNavigator, "root");
  const mapStateToProps = (state) => ({
    state: state.nav,
  });

const AppWithNavigationState = connect(mapStateToProps)(App);

  const store = createStore(
    appReducer,
    applyMiddleware(middleware),
  );
  
export default class TestN extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
