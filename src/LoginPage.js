import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import {Button, Input} from './components';

function LoginPage(){
    return(
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{flex:1}} 
        
        >
            <ScrollView>
             <View style={styles.container}>

            <Image style={styles.image}
            source={require('./image/cart.png')} 
            resizeMode='center'/>
            

            <Text style={styles.title}>My App</Text>

            <Input
            placeholder='E-posta adresinizi giriniz...'/>

            <Input
            placeholder='Şifrenizi giriniz..'
            />

            <Button title= "Giriş Yap"/>
            <Button title= "Kayıt Ol"/>
         </View>
         </ScrollView>
       
        </KeyboardAvoidingView>
       
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffd0b0',
    },
    image:{
        flex:0.5,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.25,
        alignSelf:'center',
        marginVertical:20,
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        alignSelf:'center',

    }
})

export default LoginPage;