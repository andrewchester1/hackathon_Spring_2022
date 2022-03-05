import React, {useEffect, useState} from 'react'
import {Center, VStack, Box, Text, Button, Input, Heading, KeyboardAvoidingView} from 'native-base'

const Calendar = () => {
    return (
        <VStack flex={1} safeArea>
            <Center>
                <Heading size={'lg'} color={'#000'}>Calendar Screen</Heading>
            </Center>
        </VStack>
    )
}

export default Calendar