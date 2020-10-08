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

class OriginalNetflix extends Component {
  render() {
    return (
        <View>
          <Text style={styles.title}>
            Originais Netflix
          </Text>
          <ScrollView horizontal={true}>
              <TouchableOpacity>
                  <ImageBackground style={styles.image}
                      source={require('../../assets/imgs/original-netflix/Bom-Dia-Veronica.png')}>
                      <Image style={styles.logo}
                          source={require('../../assets/imgs/logo/N.png')} />
                  </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                  <ImageBackground style={styles.image}
                          source={require('../../assets/imgs/original-netflix/Vis-a-Vis.png')}>
                      <Image style={styles.logo}
                          source={require('../../assets/imgs/logo/N.png')} />
                  </ImageBackground>
              </TouchableOpacity>
              
              <TouchableOpacity>
                  <ImageBackground style={styles.image}
                      source={require('../../assets/imgs/original-netflix/Lucifer.png')}>
                      <Image style={styles.logo}
                          source={require('../../assets/imgs/logo/N.png')} />
                  </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                  <ImageBackground style={styles.image}
                      source={require('../../assets/imgs/original-netflix/Deadwind.png')}>
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
      marginTop: ('3%'),
      color: '#FFF'
    },
    image: {
      width: w('40%'),
      height: h('42%'),
      margin: w('2%'),
      borderRadius: w('3%')
    },
    logo: {
      width: w('3.5%'),
      height: h('3.5%'),
      margin: w('1%')
    }
  })

export default OriginalNetflix