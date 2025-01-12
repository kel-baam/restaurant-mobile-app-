import {StyleSheet, Text, View,Image,FlatList,Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import  products from "@/assets/data/products";
import { Link } from "expo-router";

const product = products[0];
const ProductListItem =({ product })=>{
  return ( 
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{uri:product.image}} style={styles.image} resizeMode="contain"/>
        <Text style={styles.title} >{product.name}</Text>

        <Text style={styles.price} >${product.price}</Text>
      </Pressable>
    </Link>

    )
}


export default function Index() {
  return (<View>
    {/* <ProductListItem product={products[0]} />
    <ProductListItem product={products[1]}/> */}
    <FlatList 
      data={products} 
      renderItem={({item})=><ProductListItem product={item}/>}
      numColumns={2}
      contentContainerStyle={{gap:10,padding:10}}
      columnWrapperStyle={{gap:10}}
    />
  </View>
  );
}



const styles=StyleSheet.create({
  
container:{
  backgroundColor:'white',
  padding:10,
  borderRadius:20,
  flex:1,
  maxWidth:'50%',
},
image:{
  width:'100%',
  aspectRatio:1,

},
title:{
  fontSize:16,
  fontWeight:700,
  marginVertical:10,
},
price:{
    color:Colors.light.tint,
    fontWeight:'bold',
}
})