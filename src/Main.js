import React from 'react';
import { FlatList, SafeAreaView,View,Text} from 'react-native';
import Input from './component/Input';
import UserItem from './component/UserItem';

const myArray = [
    {
        id:0,
        name: 'There was something special about this little creature.',
        age:19,
        isAdmin:true,
    },
    {
        id:1,
        name:'Donna couldnt quite pinpoint what it was, but she knew with all her heart that it was true. ',
        age:15,
        isAdmin:false,
    }, {
        id:2,
        name:'It wasnt a matter of if she was going to try and save it, but a matter of how she was going to save it.',
        age:40,
        isAdmin:true,
    },
]




    

function Main(){

       const Renderuser=({item}) => <UserItem user={item}/> 

    return(
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
            <FlatList
            data={myArray}
            keyExtractor={(item,index) => index.toString()}
            renderItem={Renderuser} />

        </View>
    </SafeAreaView>
    )
}

export default Main;

