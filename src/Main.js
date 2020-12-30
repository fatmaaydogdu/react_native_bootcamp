import React from 'react';
import { SafeAreaView,View, } from 'react-native';
import Input from './component/Input';

function Main(){
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Input 
                label="E-posta: "
                placeholder="E-posta adresinizi giriniz..."
                onText={(name) => console.log(name)}
                type="email-address"
                />

                <Input
                label="Şifreniz: "
                placeholder="Şifrenizi giriniz..."
                onText={(surname) => console.log(surname)}
                />
                </View>  
        </SafeAreaView>
    )
}

export default Main;

