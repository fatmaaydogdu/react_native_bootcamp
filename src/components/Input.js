import React from 'react';
import {View,TextInput, StyleSheet } from 'react-native';

function Input({placeholder}){
    return(
        <View style={styles.container}>
           <TextInput placeholder={placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        padding:1,
        borderRadius:15,
    }
})
export {Input}