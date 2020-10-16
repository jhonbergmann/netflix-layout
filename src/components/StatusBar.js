import React, { Component } from 'react'
import {
  StatusBar, 
  View
} from 'react-native'

class StatusBarApp extends Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle='light-content'
          hidden={false}
          backgroundColor='#000'
        />
      </View>
    )
  }
}

export default StatusBarApp
