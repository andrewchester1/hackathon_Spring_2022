import * as SecureStore from 'expo-secure-store';

export const saveToken = async (value) => {
    try {
        await SecureStore.setItemAsync('secure_token', value)
    } catch (error) {
        console.log(error)
    }
    
}

export const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync('secure_token')
        return token
    } catch (error) {
        console.log(error)
    }
}

export const deleteToken = async () => {
    try {
        await SecureStore.deleteItemAsync('secure_token')
    } catch (error) {
        console.log(error)
    }
}

export const getApiServer = () => {
    return 'https://bcd3-198-150-234-220.ngrok.io'
}

export const authHeader = async () => {
    const token = await getToken()
    if (token) {
        return {headers: {Authorization: `Bearer ${token}`}}
    } else {
        return {}
    }
}