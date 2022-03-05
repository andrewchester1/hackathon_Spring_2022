import React, {useEffect, useState} from 'react'
import {Center, VStack, HStack, Box, Text, Button, Input, Heading, KeyboardAvoidingView} from 'native-base';

import axios from 'axios'

const Settings = () => {
    useEffect(async () => {
        const credentials = {'email': 'andrew@gmail.com', 'password': 'Password1'}
		const user = await axios.post('https://46a2-198-150-234-220.ngrok.io/users/authenticate', credentials)
        console.log('userData', user)
    }, [])
    return (
        <VStack flex={1} safeArea>
            <Center>
                <Heading size={'lg'} color={'#000'} >Settings Screen</Heading>
                <Box width='100%' height='15%' borderColor='black' borderWidth='1' padding='5'>
                    <HStack flex={.5}></HStack>
                    <HStack>
                    <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='left'>
                                Account
                            </Text>
                        </VStack>                        
                        <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='right'>
                                {">"}
                            </Text>
                        </VStack>
                    </HStack>    
                </Box>
                <Box width='100%' height='15%' borderColor='black' borderWidth='1' padding='5'>
                    <HStack flex={.5}></HStack>
                    <HStack>
                    <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='left'>
                                Email
                            </Text>
                        </VStack>
                        <VStack flex={1}></VStack>                        
                        <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='right'>
                                {">"}
                            </Text>
                        </VStack>
                    </HStack>    
                </Box>
                <Box width='100%' height='15%' borderColor='black' borderWidth='1' padding='5'>
                    <HStack flex={.5}></HStack>
                    <HStack>
                    <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='left'>
                                Phone Number
                            </Text>
                        </VStack>
                        <VStack flex={1}></VStack>                        
                        <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='right'>
                                {">"}
                            </Text>
                        </VStack>
                    </HStack>    
                </Box>
                <Box width='100%' height='15%' borderColor='black' borderWidth='1' padding='5'>
                    <HStack flex={.5}></HStack>
                    <HStack>
                    <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='left'>
                                Help
                            </Text>
                        </VStack>
                        <VStack flex={1}></VStack>                        
                        <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='right'>
                                {">"}
                            </Text>
                        </VStack>
                    </HStack>    
                </Box>
                <Box width='100%' height='15%' borderColor='black' borderWidth='1' padding='5'>
                    <HStack flex={.5}></HStack>
                    <HStack>
                    <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='left'>
                                About
                            </Text>
                        </VStack>
                        <VStack flex={1}></VStack>                        
                        <VStack flex={1}>
                            <Text fontSize='20' color='black' textAlign='right'>
                                {">"}
                            </Text>
                        </VStack>
                    </HStack>    
                </Box>
            </Center>
        </VStack>
    )
}

export default Settings