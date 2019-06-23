import React, { Component } from 'react';
import {
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
  Text,
} from '../components/Custom';
import * as Animatable from 'react-native-animatable';
import { PRODUCTS, CATEGORY } from '../utils';

const { width, height } = Dimensions.get('window');

export class Home extends Component {

  state = {
    category: 0,
  }

  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.bounce(500);

  _keyExtractor = (item) => item.id.toString();

  _itemProduct = ({ item, index }) => (
    <CardEntry item={item} />
  )

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground source={{ uri: Images.adidas_hoodie }} style={styles.img_bg}>
        </ImageBackground>
        <View style={styles.sub_story}>
          <View style={styles.social}>
            <Text color="#fff" style={styles.social_item}>Fb.</Text>
            <Text color="#fff" style={styles.social_item}>Tw.</Text>
            <Text color="#fff" style={styles.social_item}>In.</Text>
          </View>
          <View style={styles.content}>
            <Text bold={true} style={styles.also_make}>You also make like</Text>
            <FlatList
              horizontal
              data={PRODUCTS}
              renderItem={this._itemProduct}
              keyExtractor={this._keyExtractor}
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={10}
            />
          </View>
          <View style={styles.category}>
            <Text color="#e94e2d">Women</Text>
            <Text color="#e94e2d">Men</Text>
            <Text color="#e94e2d">Kids</Text>
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
    paddingVertical: 25,
    paddingLeft: 30,
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

  },
  content: {
    marginVertical: 30
  },
  also_make: {
    marginBottom: 25
  },
  category: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 35,
    left: 0,
    right: 0
  }
});

export default Home
