import {StatusBar} from 'expo-status-bar'
import React, {useState, useRef} from 'react'
import {Text, Heading, Center, VStack, Pressable, Input} from 'native-base'

import axios from 'axios'
import {useFormik} from 'formik'
import * as Yup from 'yup'


const LoginSchema = Yup.object().shape({
	email: Yup.string().required('Required'),
	password: Yup.string().required('Required')
})

export default function Signin({navigation}) {
	const [passwordVisibility, setPasswordVisibility] = useState(true)
	const [rightIcon, setRightIcon] = useState('eye')
	const [loginError, setLoginError] = useState('')

	const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
		useFormik({
			validationSchema: LoginSchema,
			initialValues: {email: '', password: ''},
			onSubmit: (values) => onLogin(values.email, values.password)
		})

	const handlePasswordVisibility = () => {
		if (rightIcon === 'eye') {
			setRightIcon('eye-off')
			setPasswordVisibility(!passwordVisibility)
		} else if (rightIcon === 'eye-off') {
			setRightIcon('eye')
			setPasswordVisibility(!passwordVisibility)
		}
	}

	const onLogin = async (email, password) => {
		const credentials = {'email': email, 'password': password}
		await axios.post('https://46a2-198-150-234-220.ngrok.io/users/authenticate', credentials)
	}

	const password = useRef(null)

	return (
		<VStack flex={1} safeArea p={2}>
			<StatusBar style='dark-content' />
			<Center>
				<Heading size={'xl'} color={'#000'}>
					Login
				</Heading>
			</Center>
			<Text style={{color: 'red'}}>
				{!!errors.email && touched.email && errors.email}
			</Text>
			<Input
				placeholder='Enter your email'
				autoCapitalize='none'
				autoCompleteType='email'
				keyboardType='email-address'
				keyboardAppearance='dark'
				returnKeyType='next'
				returnKeyLabel='next'
				onChangeText={handleChange('email')}
				onBlur={handleBlur('email')}
				error={errors.email}
				touched={touched.email}
				onSubmitEditing={() => password.current?.focus()}
			/>
			<Text style={{color: 'red'}}>
				{!!errors.password && touched.password && errors.password}
			</Text>
			<Input
				ref={password}
				icon='key'
				placeholder='Enter your password'
				secureTextEntry
				autoCompleteType='password'
				autoCapitalize='none'
				keyboardAppearance='dark'
				returnKeyType='go'
				returnKeyLabel='go'
				onChangeText={handleChange('password')}
				onBlur={handleBlur('password')}
				error={errors.password}
				touched={touched.password}
				onSubmitEditing={() => handleSubmit()}
			/>
			{loginError !== '' && (
				<Text style={{color: 'red'}}>{loginError}</Text>
			)}
			<Pressable
				p={2}
				my={4}
				bgColor={'#000'}
				borderRadius={5}
				onPress={() => handleSubmit()}>
				<Text color={'#fff'} fontSize={'lg'} alignSelf={'center'} bold>
					Login
				</Text>
			</Pressable>
			<Center my={2}>
				<Pressable onPress={() => navigation.navigate('Signup')}>
					<Text fontSize={'lg'} color={'#000'}>
						Create Account
					</Text>
				</Pressable>
			</Center>
		</VStack>
	)
}