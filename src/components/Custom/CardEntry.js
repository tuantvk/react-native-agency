import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export class CardEntry extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.image} />
        <Text>Adidas 1</Text>
        <Text>$12</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    height: 170,
    marginRight: 8,
    borderRadius: 8
  },
  image: {
    backgroundColor: '#cacaca',
    width: '100%',
    height: 130
  }
});

export default CardEntry;