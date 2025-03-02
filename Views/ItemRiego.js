 import React from 'react'
 import {StyleSheet,Text, View, TouchableOpacity} from 'react-native'
 import { Ionicons } from '@expo/vector-icons';

 const ItemRiego = (props) => (
     <View style={styles.cardView}>
         <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
               Nombre de Riego: {props.nombre}
         </Text>
         <Text style={{textTransform: 'uppercase', color:'green'}}>
               Cultivo: {props.nombreculti}
         </Text>
        <Text style={{textTransform: 'uppercase', color:'brown'}}>
              Fecha: {props.fecha}
        </Text>
        <Text style={{textTransform: 'uppercase', color:'brown'}}>
              Hora de inicio: {props.horastart}
        </Text>
        <Text style={{textTransform: 'uppercase', color:'brown'}} >
             Hora de fin: {props.horaend}
        </Text> 
        <View style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity  style={{marginHorizontal:10}} 
          onPress={props.onpress} >
          <Ionicons name="md-create" size={36} color="#07C71F" />
       </TouchableOpacity>
       </View>

    </View>
   );
  
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

   export default ItemRiego;