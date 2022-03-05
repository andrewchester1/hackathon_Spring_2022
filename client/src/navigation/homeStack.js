import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import CalendarScreen from '../screens/client/Calendar'
import HomeScreen from '../screens/client/Home'
import SettingsScreen from '../screens/client/Settings'

const Tab = createBottomTabNavigator()

export default function AuthStack() {
	return (
		<Tab.Navigator headerMode='none'>
			<Tab.Screen name='Home' component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
                }}
            />
			<Tab.Screen name='Calendar' component={CalendarScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size} />
                }}
            />
            <Tab.Screen name='Settings' component={SettingsScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <Ionicons name='settings' color={color} size={size} />
			    }}
            />
		</Tab.Navigator>
	)
}