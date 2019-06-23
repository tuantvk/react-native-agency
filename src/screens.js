import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Login', () => require('./containers/Login').default);
  Navigation.registerComponent('Home', () => require('./containers/Home').default);
  Navigation.registerComponent('Category', () => require('./containers/Category').default);
  Navigation.registerComponent('ProductDetail', () => require('./containers/ProductDetail').default);
}