import React from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, Text } from 'react-native';

function Input(props){
    return(
            <View >
            <Text style={styles.label}>{props.label} </Text>
            
                <View style={styles.inputContainer}>
                    <TextInput
                    placeholder={props.placeholder}
                    onChangeText={(value) => props.onText(value)}
                    keyboardType={props.type}
                    />
                </View>
                </View>  
        
    )
}
export default Input;

const styles = StyleSheet.create({

    inputContainer: {
        backgroundColor:'#eceff1',
        margin: 2,
        padding:2,
        borderRadius: 10,
    },
    label:{
        fontSize:20,
        fontWeight:'bold',
    }
})