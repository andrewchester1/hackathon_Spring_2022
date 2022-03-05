import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import SignInScreen from '../screens/auth/SignIn.js'
import SignUpScreen from '../screens/auth/SignUp.js'

const Stack = createStackNavigator()

export default function AuthStack() {
	return (
		<Stack.Navigator headerMode='none'>
			<Stack.Screen name='Login' component={SignInScreen} />
			<Stack.Screen name='Signup' component={SignUpScreen} />
		</Stack.Navigator>
	)
}