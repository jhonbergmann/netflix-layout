import React, { Component } from 'react'
import {  
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

class Captions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>
            Sinistros
          </Text>
        </TouchableOpacity>
        <Text style={styles.circle}>•</Text>
        <TouchableOpacity>
          <Text style={styles.text}>
            Assustadores
          </Text>
        </TouchableOpacity>
        <Text style={styles.circle}>•</Text>
        <TouchableOpacity>
          <Text style={styles.text}>
            Suspense no ar
          </Text>
        </TouchableOpacity>
        <Text style={styles.circle}>•</Text>
        <TouchableOpacity>
          <Text style={styles.text}>
            Terror
          </Text>
        </TouchableOpacity>
        <Text style={styles.circle}>•</Text>
        <TouchableOpacity>
          <Text style={styles.text}>
            Demônios
          </Text >
        </TouchableOpacity>
        <Text style={styles.circle}>•</Text>
        <TouchableOpacity>
          <Text style={styles.text}>
            Italiano
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: h('1.5%')
  },
  text: {
    fontSize: h('1.45%'),
    color: '#FFF',
    margin: w('0.5%')
  },
  circle: {
    fontSize: h('1.5%'),
    color: '#D5011D',
    margin: w('0.5%')
  }
})

export default Captions