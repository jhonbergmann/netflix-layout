import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { heightPercentageToDP as h } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/AntDesign'

import StatusBarApp from './components/StatusBar'
import Home from './screens/Home'

const Tab = createBottomTabNavigator()
export default function MenuRoutes() {
  return (
  <NavigationContainer>
    <StatusBarApp />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name === 'Home') {
            iconName = focused
                ? 'home' 
                : 'home'
        } else if (route.name === 'Search') {
            iconName = focused 
                ? 'search1' 
                : 'search1'
        } else if (route.name === 'Brief') {
            iconName = focused 
                ? 'playcircleo'
                : 'playcircleo'
        } else if (route.name === 'Download') {
            iconName = focused 
                ? 'download' 
                : 'download'
        } else if (route.name === 'More') {
            iconName = focused 
                ? 'menuunfold' 
                : 'menuunfold'
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={h('3%')} color={'#FFF'} />
        }
    })}
    tabBarOptions= {{
      activeTintColor: '#FFF',
      style: {
        backgroundColor: '#121212'
      }
    }}
    >
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
      tabBarLabel: 'Inicio'
    }}
    />
    <Tab.Screen
      name='Search'
      component={Home}
      options={{
      tabBarLabel: 'Buscas'
    }}
    />
    <Tab.Screen
      name='Brief'
      component={Home}
      options={{
      tabBarLabel: 'Em breve',
      tabBarBadge: 15
    }}
    />
    <Tab.Screen
      name='Download'
      component={Home}
      options={{
      tabBarLabel: 'Downloads'
    }}
    />
    <Tab.Screen
      name='More'
      component={Home}
      options={{
      tabBarLabel: 'Mais'
    }}
    />
    </Tab.Navigator>
  </NavigationContainer>
  )
}