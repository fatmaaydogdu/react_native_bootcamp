import React from 'react';
import { SafeAreaView,View,Text, StyleSheet } from 'react-native';

function UserItem({user}){
    return(
      <SafeAreaView>
        <View style={styles.container}>
            <Text>{user.name}</Text>
            <View>
              <Text>{user.age}</Text>  
              {user.isAdmin && <Text style={{fontWeight: 'bold'}}>ADMIN</Text>}
            </View>
            

        </View>
    </SafeAreaView>   
    )
}

export default UserItem;

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        padding:5,
        margin:5
    }
})