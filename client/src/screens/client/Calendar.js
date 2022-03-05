import React, {useEffect, useState} from 'react'
import {Center, HStack, VStack, Box, Text, Button, Input, Heading, KeyboardAvoidingView, NativeBaseProvider } from 'native-base'
//alignItems="center" alignSelf="auto" bg="#d8e1d2" height="20%" width="14.28%"
const OurCalendar = () => {
    return (
        
        <VStack flex={1} safeArea>
            <Center>
                <Heading size={'lg'} color={'#000'}>Calendar Screen</Heading>
            </Center>
            <HStack flex={.25} safeArea>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Day2 </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day3 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Day4 </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day5 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Day6 </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day7 </Text>
                    </Box>
            </HStack>

            <HStack flex={.5} safeArea>

            <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day8 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Day9 </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day10 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Day11 </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day12 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Day13 </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
            </HStack>
            <HStack flex={.75}>

            <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Test </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Test </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Test </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
            </HStack>
            <HStack flex={1}>

            <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Test </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Test </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
                    
                    <Box bg="#c0c0c0" height="200" width="14.5%"> 
                            <Text fontSize={"xl"} color={"#ffffff"}> Test </Text> 
                    </Box>

                    <Box bg="#000000" height="200" width="14.5%"> 
                            <Text fontSize={"lg"} color={"#ffffff"}> Day1 </Text>
                    </Box>
            </HStack>
            
        </VStack>
    )
}

export default OurCalendar