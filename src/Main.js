import React, {useState} from 'react';
import { FlatList, SafeAreaView,View,Text,Button} from 'react-native';


function Main(){
const[counter,setCounter] = useState(0);

    return(
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
            <Text style={{fontSize:40}}>Counter: {counter}</Text>
            <Button title= 'up' 
            onPress={() => setCounter(counter + 1)}
            />
            
        </View>
    </SafeAreaView>
    )
}

export default Main;

