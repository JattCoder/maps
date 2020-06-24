import React from 'react'
import { View,Text,Button } from 'react-native'

const Register = ({route,navigation}) => {
    return(
        <View>
            <Text>{route.params.name}</Text>
            <Button title='Go Back' onPress={()=>{navigation.navigate('Login')}}></Button>
        </View>
    )
}

export default Register