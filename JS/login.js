import React from 'react'
import { StyleSheet,View,Button, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
            
            <TextInput placeholder='Email' style={{width: 300, height: 55, borderColor: '#0aa3c2', borderRadius: 50, padding: 10, color: '#5af2ea'}}/>
            <TextInput placeholder='Password' style={{width: 300, height: 55, borderColor: '#0aa3c2', borderRadius: 50, padding: 10, color: '#5af2ea'}}/>
            <Button borderRadius='50%' title='Register' onPress={()=>{
                navigation.navigate('Login', {
                    name: 'Harmandeep Mand',
                  })
            }} />
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button style={{width: 500}} title='Register' onPress={()=>{
                navigation.navigate('Register', {
                    name: 'Harmandeep Mand',
                  })
            }} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 500,
        height: 60,
    }
  });