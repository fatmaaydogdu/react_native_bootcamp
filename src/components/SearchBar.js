import React from 'react';
import {TextInput, View,StyleSheet} from 'react-native';

function SearchBar(props){
    return(
        <View style={styles.container}>
            <TextInput style={styles.title} 
            placeholder = 'Ürün arama..' 
            onChangeText={props.onSearch}/>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    margin:2,
    borderBottomWidth: 2,
    borderColor:'#efefef',
    paddingBottom:5,
},

title:{
    fontWeight:'bold',
    fontSize:20,
    color:'white',
}
})
export {SearchBar}