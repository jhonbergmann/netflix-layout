import React, { Component } from 'react'
import {  
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

import IconInformation from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAdd from 'react-native-vector-icons/Ionicons'
import IconPlay from 'react-native-vector-icons/Entypo'

class Buttons extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IconAdd style={{ alignSelf: 'center' }} 
                    name='md-add' 
                    size={w('7%')} 
                    color={'#FFF'} />
                <Text style={styles.text}>Minha lista</Text>
            </TouchableOpacity>
            
            <View style={styles.button}>
              <TouchableOpacity style={{ 
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: h('0.5%')
                }}>
                  <IconPlay 
                    name='controller-play' 
                    size={w('6%')} 
                    color={'#000'} 
                  />
                  <Text style={{ 
                    color: '#000', 
                    fontSize: h('1.7%'),
                    fontWeight: 'bold' 
                  }}>Assistir</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <IconInformation style={{ alignSelf: 'center' }}  
                    name='information-outline' 
                    size={w('7%')} 
                    color={'#FFF'} />
                <Text style={styles.text}>Saiba mais</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: h('1.5%'),
    color: '#FFF'
  },
  button: {
    backgroundColor: '#FFF',
    width: w('25%'),
    height: h('4.5%'),
    borderRadius: 3,
    alignItems: 'center'
  }
})

export default Buttons