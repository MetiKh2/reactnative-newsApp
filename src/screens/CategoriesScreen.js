/* eslint-disable prettier/prettier */
import { View, Text, FlatList, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { categories } from '../constants'
const windowWidth = Dimensions.get('window').width;

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
       <FlatList numColumns={2} data={categories} renderItem={({item})=>(
        <Pressable onPress={()=>navigation.navigate('NewsCategory',{category:item.name})} style={{width:(windowWidth/2)-10,height:100,backgroundColor:item.color,margin:5,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>{item.name}</Text>
        </Pressable>
       )}/>
    </View>
  )
}

export default CategoriesScreen