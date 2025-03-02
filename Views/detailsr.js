import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Button} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
  const Detailssrr = (props) => {
    // useEffect(() => {
    //   props.getriego.bind(this, props)
    //  }, [])
     const navigation = useNavigation()
     return(
   <View style={styles.cardView}>
   <Text alignContent={'center'}>Nombre de riego: {props.nombr}</Text>
    <Text alignContent={'center'}>Cultivo: {props.nombrec}</Text>
    <Text alignContent={'center'}>Fecha: {props.fecha}</Text>
    <Text alignContent={'center'}>Hora de Inicio: {props.horastart}</Text>
    <Text alignContent={'center'}>Hora de Fin: {props.horaend}</Text>
    <Text alignContent={'center'}>Tiempo manual de riego: {props.tmanual}</Text>
    <TextInput onChangeText={props.mins} value={props.mins} defaultValue={props.mins}/>
    <Button title={props.cadena} alignContent={'center'} onPress={props.riegomanual}>
      </Button>
    <Button title='EDITAR RIEGO' onPress={()=>navigation.navigate('aRiego', {idrupdate:props.idr,
       noupdate:props.nombr, idcupdate:props.idcultiv, ncvupdate:props.nombrec, feupdate:props.fecha,
       hsupdate:props.horastart, heupdate:props.horaend})}></Button>
    <Button title='ELIMINAR RIEGO' onPress={props.nav3.bind(this, props)}></Button>
    </View>)
    }
    
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
      },
      button: {
        width: 10,
        padding: 10,
        height: 10,
      },
});

export default Detailssrr;