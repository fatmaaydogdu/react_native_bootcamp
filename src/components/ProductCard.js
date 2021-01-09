import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';

//{
//   id: 0,
//    title: 'Xiaomi Mi True Wireless Earbuds',
//    imgURL:
//    'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
//  price: '₺134,77',
//   inStock: true,
 // },



function ProductCard({product, onCart}){
    return(
        <View style={styles.container}>
            <Image 
            source={{uri: product.imgURL}}
            style={styles.image} />

            <Text style={styles.title}>{product.title}</Text>

            <View style={styles.footer}>
            <View>    
            <Text style={styles.price}>{product.price}</Text>
            {!product.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
             </View> 

            <TouchableOpacity onPress={() => onCart(product)}>
                <Image 
                source={require('../assests/cart.png')}
                style={{
                    width:50,
                    height:50,
                    tintColor:'#ffb74d'
                }}
                />
            </TouchableOpacity>  
                
          
              </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:20,
        margin:20,
        borderRadius:8,
        elevation:5, 
    },

    image:{
        height: Dimensions.get('window').height / 3,
    },

    title:{
        fontSize:17,
        marginVertical:5,
    },
    price:{
        fontSize:20,
        fontWeight:'bold'
    },
    footer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    stock:{
        color:'red',
        fontWeight:'bold',
        fontSize:20,
    }
})


export {ProductCard};