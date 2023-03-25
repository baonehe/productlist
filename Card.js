import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Card(props) {
  return (
    <View style={styles.Card} >
    <Image 
       source={{ uri: props.image_url }}
       style={{ width: 200, height: 200, borderRadius: 35 }}
     />
     <Text style={{ paddingLeft: 10, alignSelf: 'center', fontSize:20,marginVertical:10,
     color:'black'}}>{props.name}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    Card:{
    flex: 1, 
    flexDirection: 'column',
    padding: 10,
    borderColor:'grey',
    borderRadius:10, 
    borderWidth:1,
    marginVertical:5,
    marginHorizontal:80,
    justifyContent:'center',
    alignItems:'center',}
})