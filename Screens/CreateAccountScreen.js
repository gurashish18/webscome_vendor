import React, {useContext, useState} from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/native'

const CreateAccountScreen = () => {
    const navigation = useNavigation()
    const handleSignup = () => {
        console.warn("Sign up!!!")
        // navigation.navigate("BottomTab")
    }
    const handleSingupFacebook = () => {
        console.warn("Facebook Sign up!!!")
    } 
    const handleSignupGoogle = () => {
        console.warn("Google Sign up!!!")
    } 
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [mail, setmail] = useState('')
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
            <Image source={require('../assets/webscomelogo.png')} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
            <Input value={username} setvalue={setusername} placeholder="Username" icon="user"/>
            <Input value={password} setvalue={setpassword} placeholder="EnterYour Password" secureTextEntry={true} icon="lock"/>
            <Input value={mail} setvalue={setmail} placeholder="EnterYour Mail" icon="link"/>
            
            <Button onPress={handleSignup} buttontext="Signup"/>

            <Text style={{color:'#000000'}}>Or</Text>

            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 25}}>
                <SocialButton iconname="sc-facebook" buttontext="Facebook" color="#3284FF" onPress={handleSingupFacebook}/>
                <SocialButton iconname="sc-google-plus" buttontext="Google" color="#E1473D" onPress={() => googleLogin()}/>
            </View>
            <View style={{ marginTop: 50, flexDirection: 'row'}}>
                <Text style={{color:'#000000'}}>Already have an Account? </Text>
                <Text style={{color: '#3284FF'}} onPress={() => navigation.navigate("Login")}>Login</Text>
            </View>
        </ScrollView>
    )
}

export default CreateAccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '',
        marginBottom: 30
    },
})
