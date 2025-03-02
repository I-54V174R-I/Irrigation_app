import React, { useState } from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Button, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

  const UpdateRiegoComp = (props) => {
     const navigation = useNavigation()
     const [idcultt, setIdCultt] = useState('')
    //  const [nombrecultivo, setNombreCultivo] = useState('')
    //  const [descripcion, setDescripcion] = useState('')
     const setId = () => {{setIdCultt(props.idcupdate)}}
     return(
        <View style={styles.cardView}>
        <Text>{props.ra}</Text>
        <Text>{props.texto}</Text>
        <TextInput onChangeText={props.campo} placeholder={JSON.stringify(props.placehold)} defaultValue={props.valor}></TextInput> 
        <Text>{props.ra2}</Text>
        <Text>{props.texto2}</Text>
        <TextInput onChangeText={props.campo2} placeholder={JSON.stringify(props.placehold)} defaultValue={props.valor2}></TextInput> 
        <Button title="GUARDAR RIEGO" onPress={props.onpress.bind(this, props)}/></View>
    )
  }
    
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical:5,
        padding: 30,
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

export default UpdateRiegoComp;