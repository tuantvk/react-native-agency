import React, { Component } from 'react';
import {
  Text,
  ImageBackground,
  StatusBar,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import Images from '../components/Images';
import {
  CardEntry,
} from '../components/Custom';
import * as Animatable from 'react-native-animatable';

const PRODUCTS = [
  { id: 1, name: '' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '' },
];
const { width, height } = Dimensions.get('window');

export class Home extends Component {

  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.bounce(500);

  _keyExtractor = (item) => item.id.toString();

  _itemProduct = ({ item, index }) => (
    <CardEntry />
  )

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground source={{ uri: Images.adidas_hoodie }} style={styles.img_bg}>
          <Text>Inside</Text>
        </ImageBackground>
        <View style={styles.sub_story}>
          <View style={styles.social}>
            <Text style={styles.social_item}>Fb.</Text>
            <Text style={styles.social_item}>Tw.</Text>
            <Text style={styles.social_item}>In.</Text>
          </View>
          <View style={styles.content}>
            <Text>You also make like</Text>
            <FlatList
              horizontal
              data={PRODUCTS}
              renderItem={this._itemProduct}
              keyExtractor={this._keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  img_bg: {
    width,
    height: height / 1.5,
    zIndex: -1
  },
  sub_story: {
    padding: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: height / 2,
    width,
    position: 'absolute',
    bottom: 0,
    zIndex: 99
  },
  social: {
    backgroundColor: '#1d1b1d',
    height: 80,
    width: width / 2.4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    top: -40,
    right: 0,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  social_item: {
    color: '#fff'
  },
  content: {
    marginVertical: 30
  }
});

export default Home
