import {StyleSheet, Text, View,Image,Pressable } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Colors } from "@/app-example/constants/Colors";
// import  products from "@/assets/data/products";
import { useLocalSearchParams,Stack } from "expo-router";
import products from "@/assets/data/products";
const sizes = ['S','M','L','XL']
import { useState } from "react";

import  CustomButton  from "@/components/Button"

// const product = products[0];
const ProductDetailsScreen =()=>{
  const [selectedSize,setSelectedSize] = useState('M');

  const {id} = useLocalSearchParams();

  const product = products.find((p)=>p.id.toString()===id);
  if(!product)
  {
    return <Text>Product not found</Text>
  }

  return ( 
    <View style={styles.container}>
      <Stack.Screen options={{title:'Details' + product.name}}/>
      <Image source={{uri:product.image}} style= {styles.image}/>
      <Text>Select size</Text>

      <View style={styles.sizes}>

         {sizes.map((size)=>(
          <Pressable onPress={()=>setSelectedSize(size)}>
            <View style={[styles.size, {backgroundColor: selectedSize === size ?'gainsboro':'white'}]} key={size}>
              <Text key={size} style={[styles.sizeText,
                {color: selectedSize === size ?'black':'gray'}
              ]}>{size}</Text>
            </View>
          </Pressable>
          ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <CustomButton text="Add to cart"/>

    </View>
    )
}

const styles =StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    padding:10,
  },
  image:{
    width:'100%',
    aspectRatio:1,
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
  },
  sizes:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10,
  },
  size:{
    backgroundColor:'gainsboro',
    fontSize:10,
    width:50,
    aspectRatio:1,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  sizeText:{
    fontSize:20,
    fontWeight:'500'
  }
})

export default  ProductDetailsScreen;