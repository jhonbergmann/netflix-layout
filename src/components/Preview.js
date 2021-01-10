import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

class Preview extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Prévias
        </Text>
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <Image style={styles.image}
              source={require('../../assets/imgs/preview/Stranger-Things.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.image}
              source={require('../../assets/imgs/preview/13-Reasons-Why.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.image}
              source={require('../../assets/imgs/preview/GreyS-Anatomy.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.image}
              source={require('../../assets/imgs/preview/Vikings.png')} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: h('2.5%'),
    marginTop: ('5%'),
    paddingLeft: ('3%'),
    color: '#FFF'
  },
  image: {
    width: w('30%'),
    height: h('20%'),
    margin: w('2%'),
    resizeMode: 'contain'
  }
})

export default Preview