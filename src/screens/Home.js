import React, { Component } from 'react'
import {  
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

import Header from '../components/Header'
import Captions from '../components/Captions'
import Buttons from '../components/Buttons'
import PreviewList from '../components/Preview'
import OnTheRise from '../components/OnTheRise'
import AvailableVideo from '../components/AvailableVideo'
import OriginalNetflix from '../components/OriginalNetflix'

class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.bannerImg} 
            source={require('../../assets/imgs/capa-banner.jpg')}>
          <Header />
          <View style={styles.titleContainer}>
            <Image style={styles.logo}
              source={require('../../assets/imgs/logo/N.png')} />
            <Text style={styles.title}>F I L M E</Text>
          </View>
        </ImageBackground>
        <Captions />
        <Buttons />
        <PreviewList />
        <OnTheRise />
        <AvailableVideo />
        <OriginalNetflix />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  bannerImg: {
    height: h('65%')
  },
  titleContainer: {
    marginTop: h('45%'),
    flexDirection: 'row',
    alignSelf: 'center' 
  },
  logo: {
    width: w('5%'),
    height: h('5%'),
    marginRight: w('2%'),
    resizeMode: 'contain'
  },
  title: {
    fontSize: h('1.5%'),
    color: '#ECECEC',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})

export default Home