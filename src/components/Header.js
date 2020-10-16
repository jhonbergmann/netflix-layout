import React, { Component } from 'react'
import {  
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../../assets/imgs/logo/N.png')} 
        />
        <View style={styles.textContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Séries</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Filmes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Minha lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: h('1%')
  },
  logo: {
    width: w('6%'),
    height: h('6%'),
    marginLeft: w('5%'),
    resizeMode: 'contain'
  },
  textContainer: {
    flexDirection: 'row'
  },
  text: {
    fontSize: h('2%'),
    color: '#FFF',
    marginLeft: w('13.5%'),
    top: h('0.5%')
  }
})

export default Header