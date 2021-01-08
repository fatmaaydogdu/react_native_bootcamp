import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity } from 'react-native';

function Button(props){
    return(
    <View>
        <TouchableOpacity style={styles.container}>
            <Text style={styles.textContainer}>{props.title}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:10,
        borderRadius:25,
        backgroundColor:'#c96f53',
    },
    textContainer:{
        fontWeight:'bold',
        alignSelf:'center',
    }
})
export {Button}