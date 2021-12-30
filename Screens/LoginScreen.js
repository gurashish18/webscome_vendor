import React, {useContext, useState} from 'react'
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate("AppNav")
    }
    const handleLoginFacebook = () => {
        console.warn("Facebook Logged in !!!")
    }
    const handleLoginGoogle = () => {
        console.warn("Google Logged in !!!")
    }
    const [password, setpassword] = useState("")
    const [mail, setmail] = useState("")
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
                <Image source={require('../assets/webscomelogo.png')} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
                <Input value={mail} setvalue={setmail} placeholder="EnterYour Mail" icon="link"/>
                <Input value={password} setvalue={setpassword} placeholder="EnterYour Password" secureTextEntry={true} icon="lock"/>
                
                <Button onPress={handleLogin} buttontext="Login"/>

                <Pressable onPress={()=>navigation.navigate("")} style={styles.container2}>
                    <Text style={styles.text2}>Login via OTP</Text>
                </Pressable>

                <Text style={{marginBottom: 10, color: '#000000'}}>Forgot your Password?</Text>
                <Text style={{color: '#000000'}}>Or</Text>

                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 25}}>
                    <SocialButton onPress={handleLoginFacebook} iconname="sc-facebook" buttontext="Facebook" color="#3284FF"/>
                    <SocialButton onPress={() => googleLogin()} iconname="sc-google-plus" buttontext="Google" color="#E1473D"/>
                </View>

                <View style={{ marginTop: 50, flexDirection: 'row'}}>
                    <Text style={{color: '#000000'}}>Don't have an Account? </Text>
                    <Text style={{color: '#3284FF'}} onPress={() => navigation.navigate("CreateAccount")}>Signup</Text>
                </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30
    },
    container2: {
        width: '60%',
        maxWidth: 300,
        borderColor: '#3284FF',
        borderWidth: 1,
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20,
    },
    text2: {
        fontSize: 20,
        color: '#3284FF'
    }
})
