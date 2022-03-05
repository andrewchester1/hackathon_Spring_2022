import React, {useContext, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View, ActivityIndicator} from 'react-native'

import axios from 'axios'

import AuthStack from './authStack'
import HomeStack from './homeStack'

export default function RootNavigator() {
	const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(true)

	useEffect(async() => {
		const credentials = {'email': 'andrew.m.chester@gmail.com', 'password': 'Password1'}
		await axios.post('https://46a2-198-150-234-220.ngrok.io/users/authenticate', credentials)
		setUser(true)
		setIsLoading(false)
	}, [])

	// if (isLoading) {
	// 	return (
	// 		<View
	// 			style={{
	// 				flex: 1,
	// 				justifyContent: 'center',
	// 				alignItems: 'center'
	// 			}}>
	// 			<ActivityIndicator size='large' />
	// 		</View>
	// 	)
	// }

	return (
		<NavigationContainer>
			{user == true ? (
				<HomeStack />
			) : (
				<AuthStack />
			)}
		</NavigationContainer>
	)
}