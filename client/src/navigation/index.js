import React from 'react'

import {NativeBaseProvider, extendTheme} from 'native-base'
import RootNavigator from './rootNavigator'

export default function Routes() {
    const theme = extendTheme({
		colors: {
			// Add new color
			primary: {
				50: '#fff',
				100: '#E8BD70',
				200: '#121212'
			}
		},
		config: {
			initialColorMode: 'dark'
		}
	})
	return (
        <NativeBaseProvider theme={theme}>
            <RootNavigator />	
        </NativeBaseProvider>	
	)
}