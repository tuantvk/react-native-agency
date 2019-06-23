import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  StyleSheet,
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

  constructor(props) {
    super(props);
    this.state = {
      category: 0,
    }
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
        <ImageBackground source={{ uri: Images.adidas_hoodie }} style={styles.img_bg}>
          <Text style={styles.felling} color="#fff" size="BS">perfect feeling</Text>
          <View style={styles.content_bg}>
            <Animatable.Text animation="fadeInLeft" direction="alternate" duration={650} easing="linear">
              <Text>Just for you</Text>
            </Animatable.Text>
            <View style={styles.title}>
              <Animatable.Text animation="fadeInLeft" direction="alternate" delay={660} duration={500} easing="linear">
                <Text bold={true} size="BS" color="#000">SPRING</Text>
              </Animatable.Text>
            </View>
            <Animatable.Text animation="fadeInLeft" direction="alternate" delay={1100} duration={450} easing="linear">
              <Text bold={true} size="L">Collection</Text>
            </Animatable.Text>
          </View>
        </ImageBackground>
        <View style={styles.sub_story}>
          <View style={styles.social}>
            <Text color="#e94e2d" style={styles.social_item}>Fb.</Text>
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
            <Text style={styles.badge} color="#fff">Women</Text>
            <Text color="#e94e2d">Men</Text>
            <Text color="#e94e2d">Kids</Text>
          </View>
        </View>
      </View >
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
    zIndex: -1,
    position: 'relative'
  },
  content_bg: {
    paddingTop: 45,
    paddingHorizontal: 30
  },
  title: {
    marginTop: 30
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
  },
  badge: {
    backgroundColor: '#e94e2d',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20
  },
  felling: {
    transform: [{ rotate: "90deg" }],
    position: 'absolute',
    top: 60,
    left: -width / 3,
    letterSpacing: 2.5
  }
});

export default Home
