import React, {useContext, useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View, ActivityIndicator} from 'react-native'

import AuthStack from './authStack'
import HomeStack from './homeStack'

export default function RootNavigator() {
	const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(true)

	useEffect(() => {
		if (!user) {
			setUser(true)
		} else {
			setIsLoading(false)
		}
	}, [])

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<ActivityIndicator size='large' />
			</View>
		)
	}

	return (
		<NavigationContainer>
			{user ? (
				<HomeStack />
			) : (
				<AuthStack />
			)}
		</NavigationContainer>
	)
}