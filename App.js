import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/containers/Login';
import Home from './src/containers/Home';
import Category from './src/containers/Category';
import ProductDetail from './src/containers/ProductDetail';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
  Category: {
    screen: Category,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: () => ({
      gesturesEnabled: false
    })
  },
}, {
    initialRouteName: "Login",
    swipeEnabled: false,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  })

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <AppContainer />
    )
  }
}