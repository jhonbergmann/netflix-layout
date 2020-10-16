import React, { Component } from 'react'
import {  
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

class OnTheRise extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Em alta
        </Text>
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <ImageBackground style={styles.image}
              source={require('../../assets/imgs/on-the-rise/La-Casa-de-Papel.png')}>
              <Image style={styles.logo}
                source={require('../../assets/imgs/logo/N.png')} />
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground style={styles.image}
              source={require('../../assets/imgs/on-the-rise/Scooby-Doo.png')}>
              <Image style={styles.logo}
                source={require('../../assets/imgs/logo/N.png')} />
            </ImageBackground>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <ImageBackground style={styles.image}
              source={require('../../assets/imgs/on-the-rise/Flash.png')}>
              <Image style={styles.logo}
                source={require('../../assets/imgs/logo/N.png')} />
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground style={styles.image}
              source={require('../../assets/imgs/on-the-rise/Pets-Unidos.png')}>
              <Image style={styles.logo}
                source={require('../../assets/imgs/logo/N.png')} />
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: h('2.5%'),
    paddingLeft: ('3%'),
    color: '#FFF'
  },
  image: {
    width: w('30%'),
    height: h('25%'),
    margin: w('2%'),
    borderRadius: w('3%'),
    resizeMode: 'contain'
  },
  logo: {
    width: w('3.5%'),
    height: h('3.5%'),
    margin: w('1%')
  }
})

export default OnTheRise