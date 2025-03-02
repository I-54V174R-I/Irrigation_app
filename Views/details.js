import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Button} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
  const Detailss = (props) => {
     const navigation = useNavigation()
    //  console.log("---------DETAILS COMPONENT----------/n")
    //  console.log("Idsent: ", props.idc)
    //  console.log("Nombresent: ", props.nombrec)
    //  console.log("Desc sent: ", props.desc)
     return(
   <View style={styles.cardView}>
    <Text alignContent={'center'}>Nombre de cultivo: {props.nombrec}</Text>
    <Text alignContent={'center'}>Descripcion: {props.desc}</Text>
    <Button title='GESTIONAR RIEGOS' onPress={()=>{navigation.navigate('iRiegos', {idcu : props.idc, nomcult : props.nombrec})}}/>
    <Button title='EDITAR CULTIVO' onPress={()=>navigation.navigate('aCultivo', {idupdate: props.idc, nupdate: props.nombrec, dupdate: props.desc})}></Button>
    <Button title='ELIMINAR CULTIVO' onPress={props.nav3.bind(this, props)}></Button>
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

export default Detailss;