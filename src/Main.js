import React from 'react';
import { FlatList, SafeAreaView,View,Text} from 'react-native';
import Input from './component/Input';

const myArray = [
    {
        id:0,
        name: 'Fatma Fatma Fatma Fatma Fatma Fatma Fatma Fatma Fatma Fatma Fatma',
        age:19,
        isAdmin:true,
    },
    {
        id:1,
        name:'Turan Turan Turan Turan Turan Turan Turan Turan Turan Turan Turan',
        age:15,
        isAdmin:false,
    }, {
        id:2,
        name:'Emine Emine Emine Emine Emine Emine Emine Emine Emine Emine Emine',
        age:40,
        isAdmin:true,
    },
]

function Main(){
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                
                <FlatList
                data={myArray}
                renderItem={({item}) => <Text>{item.name}</Text>}

                />
                </View>  
        </SafeAreaView>
    )
}

export default Main;

