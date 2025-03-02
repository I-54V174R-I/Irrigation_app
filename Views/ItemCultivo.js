import React from 'react'
import {StyleSheet,Text, View, TouchableOpacity, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Component } from 'react/cjs/react.production.min';

  const ItemCultivo = (props) => (
      <View style={styles.cardView}>
         <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
               Nombre de cultivo: {props.nombrecultivo}
         </Text>
         <Text style={{textTransform: 'uppercase', color:'green'}}>
              Descripcion: {props.descripcion}
         </Text> 
         <View style={{flexDirection:'row-reverse'}}>
         <TouchableOpacity style={{marginHorizontal:10}}>
           <Ionicons name="md-create" size={36} color="#07C71F" 
           onPress={props.onpress}/>
         <Text style={{textTransform: 'uppercase', color:'green'}} ></Text>
        </TouchableOpacity>
        </View>
  
     </View>);
  
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical:5,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      }
});

  export default ItemCultivo;