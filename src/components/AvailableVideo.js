import React, { Component } from 'react'
import {  
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import Video from 'react-native-video'
import {
  widthPercentageToDP as w, 
  heightPercentageToDP as h
} from 'react-native-responsive-screen'

import IconAdd from 'react-native-vector-icons/Ionicons'
import IconPlay from 'react-native-vector-icons/Entypo'

class AvailableVideo extends Component {
render() {
  return (
    <View>
      <Text style={styles.title}>
        Já disponível
      </Text>
      <Video style={styles.video}
        resizeMode={'contain'}
        repeat={true}
        muted
        source={require('../../assets/videos/avaliable-video/video.mp4')} 
      />
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center' }}>
        <TouchableOpacity style={styles.playButton}>
          <IconPlay 
            name='controller-play' 
            size={w('6%')} 
            color={'#000'} 
          />
          <Text style={styles.playBtnText}>Assistir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <IconAdd style={{ alignSelf: 'center' }} 
            name='md-add' 
            size={w('7%')} 
            color={'#FFF'} 
          />
          <Text style={styles.addBtnText}>Minha lista</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    fontSize: h('2.5%'),
    paddingLeft: ('3%'),
    marginTop: ('3%'),
    color: '#FFF'
  },
  video: {
    width: '100%',
    height: h('30%'),
    alignSelf: 'center'
  },
  playButton: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: w('46%'),
    height: h('5%'),
    borderRadius: w('1%'),
    marginLeft: w('2%')
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width: w('46%'),
    height: h('5%'),
    borderRadius: w('1%'),
    marginRight: w('2%')
  },
  playBtnText: {
    fontSize: h('1.8%'),
    color: '#000'
  },
  addBtnText: {
    fontSize: h('1.8%'),
    color: '#FFF'
  }
}) 

export default AvailableVideo