import React, {useState,useEffect} from 'react';
import {SafeAreaView,View,Text,FlatList,StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ProductCard,SearchBar} from './components';



const products = [
  {
    id: 0,
    title: 'Xiaomi Mi True Wireless Earbuds',
    imgURL:
      'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
    price: '₺134,77',
    inStock: true,
  },
  {
    id: 1,
    title: 'General Mobile GM 20',
    imgURL:
      'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
    price: '₺1.810,21',
    inStock: true,
  },
  {
    id: 2,
    title: 'Philips 58PUS8505/62 The One',
    imgURL:
      'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
    price: '₺6.992,25',
    inStock: false,
  },
  {
    id: 3,
    title: 'LG 49UM7100PLB Ultra HD 4K',
    imgURL:
      'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
    price: '₺4.614,38',
    inStock: true,
  },
  {
    id: 4,
    title: 'Samsung Galaxy M31 SM-M315F',
    imgURL:
      'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
    price: '₺2.995,80',
    inStock: true,
  },
  {
    id: 5,
    title: 'Apple AirPods Series 2',
    imgURL:
      'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
    price: '₺1.299,00',
    inStock: true,
  },
  {
    id: 6,
    title: 'Lenovo Tab M10 Plus',
    imgURL:
      'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
    price: '₺2.496,50',
    inStock: false,
  },
  {
    id: 7,
    title: 'Xiaomi Redmi 20000 Mah',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
    price: '₺134,70',
    inStock: false,
  },
  {
    id: 8,
    title: 'Xiaomi Mijia Smart Home 360',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
    price: '₺269,73',
    inStock: true,
  },
  {
    id: 9,
    title: 'Xiaomi Mi Box S 4K Ultra HD',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
    price: '₺478,53',
    inStock: true,
  },
  {
    id: 10,
    title: 'Haylou Solar LS-5 Smartwatch',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
    price: '₺296,00',
    inStock: true,
  },
];

function Main(){
const [cartList,setCartList] = useState([]);
const [productList, setProductList] = useState([]);

const renderProduct=({item}) => <ProductCard product={item} onCart={addCart}/>

function SearchProduct(text){
const filteredList = products.filter((product) => {
    const itemName = product.title.toUpperCase();
    const searchWord = text.toUpperCase();

    return itemName.indexOf(searchWord) > -1;
    
});
setProductList(filteredList);
}

useEffect(() => { setProductList(products);
}, [])

function addCart(item){
  
  const index = cartList.findIndex((cartItem) => cartItem.id === item.id);
  if (index > -1){
    return;
  }

setCartList([... cartList, item.title]);

}


    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
     
         <FlatList 
         ListEmptyComponent={<Text>Ürün Bulunamadı..</Text>}
         ListHeaderComponent={<SearchBar onSearch={SearchProduct}/>}
         keyExtractor={(item,index) => item.id.toString()}
         data={productList}
         renderItem={renderProduct}
         />

         <TouchableOpacity style={styles.cartButtonContainer}>
           <Image 
           source={require('./assests/cart.png')}
           style={styles.cartIcon}
           />
         </TouchableOpacity>


         </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#c66900',
    },

    cartButtonContainer:{
      width: 80,
      height:80,
      borderRadius:70,
      backgroundColor: '#ff9800',
      alignItems:'center',
      alignSelf:'center',
      position:'absolute',
      bottom:10,
    },
    cartIcon:{
      width:80,
      height:80,
      borderRadius: 70,
      tintColor: 'white',
    }
})
export default Main;